"use client";
import { SubmitHandler, FormProvider } from "react-hook-form";
import { useAppForm } from "@/lib/hooks/useFormContext";
import { NominationReq } from "@/lib/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/hooks/useAppContext";
import { ToastContainer, toast } from "react-toastify";

// import { cookies } from "next/headers";

export default function Provider({ children }: FormProviderProps) {
  const notify = () => toast("Error with submission, Try again later");

  const router = useRouter();
  const { authToken, setNominations } = useApp();
  const processOptions = [
    "very_unfair",
    "unfair",
    "not_sure",
    "fair",
    "very_fair",
  ];

  const nominationSchema = yup
    .object<NominationReq>({
      nominee_id: yup.string().required("A nominee must be selected"),
      reason: yup
        .string()
        .min(10)
        .required("Reason must be atleast 10 characters long"),
      process: yup
        .string()
        .oneOf(processOptions, "A valid rating must be selected")
        .required("A rating must be selected"),
    })
    .required();

  const methods = useAppForm({
    defaultValues: {
      nominee_id: "",
      reason: "",
      process: "",
    },
    resolver: yupResolver(nominationSchema),
  });

  // const authToken - cookies().get("auth-token")?.value;
  const onSubmit: SubmitHandler<NominationReq> = (data) => {
    return axios
      .post("https://cube-academy-api.cubeapis.com/api/nomination", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        console.log("success");
        setNominations!((prev) => [...prev, res.data.data]);
        router.push("/submitted");
        if (res.status !== 200) {
          notify();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex w-full h-full items-center justify-center z-[1] lg:py-8"
      >
        {children}
      </form>
      <ToastContainer />
    </FormProvider>
  );
}

interface FormProviderProps {
  children: React.ReactNode;
  authToken?: string;
}

//see if you can fix th resolver type warning
//abstarct all functiosn
//abdstract all  ui interface props
