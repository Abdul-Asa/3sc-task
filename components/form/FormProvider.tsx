"use client";
import { SubmitHandler, FormProvider } from "react-hook-form";
import { useAppForm } from "@/lib/hooks/useFormContext";
import { NominationReq } from "@/lib/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Provider({ children }: FormProviderProps) {
  const nominationSchema = yup
    .object({
      nominee_id: yup.string().required("A nominee must be selected"),
      reason: yup.string().required("A nominee must be selected"),
      process: yup.string().required("A nominee must be selected"),
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

  const onSubmit: SubmitHandler<NominationReq> = (data) => {
    const isValid = !!(data.nominee_id && data.reason && data.process);
    // console.log(isValid);
    console.log(data);
    //validation
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex w-full h-full items-center justify-center"
      >
        {children}
      </form>
    </FormProvider>
  );
}

interface FormProviderProps {
  children: React.ReactNode;
}
