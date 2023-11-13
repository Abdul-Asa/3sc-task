"use client";
import { useFormContext } from "react-hook-form";
import Button from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "@/components/ui/textarea";
import StickyDrawer from "@/components/ui/sticky-drawer";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/lib/hooks/useAppContext";

export interface CustomSelectProps {
  placeholder?: string;
}

const ReasonForm: React.FC<CustomSelectProps> = ({ placeholder }) => {
  const router = useRouter();
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const reasonValue = watch("reason");
  const hasReasonError = !!errors.reason;

  useEffect(() => {
    const nomineeIdValue = watch("nominee_id");
    if (!nomineeIdValue) router.push("/vote/nominate");
  }, []);

  return (
    <div className="px-4 lg:px-0  h-full w-full ">
      <FormField
        control={control}
        name="reason"
        render={({ field }) => (
          <FormItem className="flex flex-col justify-between h-full">
            <div>
              <FormLabel className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                Reasoning
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    placeholder || "Tell us a little about your nomination"
                  }
                  className="resize-none mb-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </div>
            <div className="lg:flex hidden justify-between">
              <Button variant="secondary" isLink="/vote/nominate">
                Back
              </Button>
              <Button
                disabled={hasReasonError || !reasonValue}
                isLink={"/vote/process"}
              >
                Next
              </Button>
            </div>
            <StickyDrawer type="horizontal">
              <Button variant="secondary" isLink="/vote/nominate" inDrawer>
                Back
              </Button>
              <Button
                disabled={hasReasonError || !reasonValue}
                isLink={"/vote/process"}
                inDrawer
              >
                Next
              </Button>
            </StickyDrawer>
          </FormItem>
        )}
      />
    </div>
  );
};

export const NomineesName: React.FC = () => {
  const { watch } = useFormContext();
  const selectedId = watch("nominee_id");
  const { nominees } = useApp();
  const selectName = nominees?.find(
    (nominee) => nominee.nominee_id === selectedId
  )?.first_name;

  return (
    <>
      I’d like to nominate{" "}
      <span className="text-secondary-pink">{selectName ?? "This cube"}</span>{" "}
      because...
    </>
  );
};

export default ReasonForm;

//add warning state for all input states
