import { useForm, DefaultValues, Resolver } from "react-hook-form";
import { NominationReq } from "../types";

export function useAppForm({
  defaultValues,
  resolver,
}: {
  defaultValues?: DefaultValues<NominationReq>;
  resolver?: Resolver<NominationReq>;
}) {
  return useForm<NominationReq>({ mode: "onChange", defaultValues, resolver });
}

//remove indirection
