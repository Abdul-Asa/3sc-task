"use client";

import { SubmitHandler, FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppForm } from "@/utils/hooks/useFormContext";
import { FormValues } from "@/utils/types";

export default function Provider({ children }: FormProviderProps) {
  const route = useRouter();

  const methods = useAppForm({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    billing: "monthly",
    addons: {
      online: false,
      storage: false,
      profile: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const isValid = !!(data.name && data.email && data.phone);

    console.log(isValid);
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
