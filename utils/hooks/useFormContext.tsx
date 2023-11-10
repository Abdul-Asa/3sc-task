import { useForm, useFormContext, DefaultValues } from "react-hook-form";
import { FormValues } from "../types";

export default function useAppFormContext() {
  return useFormContext<FormValues>();
}

export function useAppForm(defaultValues?: DefaultValues<FormValues>) {
  return useForm<FormValues>({ defaultValues });
}
