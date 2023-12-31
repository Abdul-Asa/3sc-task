"use client";
import {
  SubmitHandler,
  FormProvider,
  useForm,
  Resolver,
} from "react-hook-form";
import { NominationReq } from "@/lib/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/hooks/useAppContext";
import { processOptions } from "@/lib/constants";

export default function Provider({ children }: FormProviderProps) {
  const router = useRouter();
  const { setNominations, authToken } = useApp();

  const nominationSchema = yup
    .object({
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

  const methods = useForm<NominationReq>({
    mode: "onChange",
    defaultValues: {
      nominee_id: "",
      reason: "",
      process: "",
    },
    resolver: yupResolver<NominationReq>(nominationSchema),
  });

  const onSubmit: SubmitHandler<NominationReq> = (data) => {
    return axios
      .post("https://cube-academy-api.cubeapis.com/api/nomination", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        console.log("success");
        setNominations((prev) => [...prev, res?.data.data]);
        router.push("/submitted");
        if (res?.status !== 200) {
          console.log(res);
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
    </FormProvider>
  );
}

interface FormProviderProps {
  children: React.ReactNode;
}

//Fix the typescript errors on the yupResolver. Go read their docs

