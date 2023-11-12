import {
  useForm,
  useFormContext,
  DefaultValues,
  Resolver,
} from "react-hook-form";
import { NominationReq } from "../types";
import { createContext } from "react";

export default function useAppFormContext() {
  return useFormContext<NominationReq>();
}

export function useAppForm({
  defaultValues,
  resolver,
}: {
  defaultValues?: DefaultValues<NominationReq>;
  resolver?: Resolver<NominationReq>;
}) {
  return useForm<NominationReq>({ mode: "onChange", defaultValues, resolver });
}
