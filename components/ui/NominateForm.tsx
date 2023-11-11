"use client";
import { NomineeRes } from "@/lib/types";
import { useFormContext } from "react-hook-form";
import Button from "./Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { FormControl, FormField, FormItem, FormLabel } from "./form";

export interface CustomSelectProps {
  options: NomineeRes;
  placeholder?: string;
}

const NominateForm: React.FC<CustomSelectProps> = ({
  options,
  placeholder,
}) => {
  const { control, watch } = useFormContext();
  const selectedNominee = watch("nominee_id");

  return (
    <div className=" flex flex-col h-full w-full  justify-between">
      <div>
        <FormField
          control={control}
          name="nominee_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                Cube’s Name
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="item-aligned">
                  {options.map((option) => (
                    <SelectItem
                      key={option.nominee_id}
                      value={option.nominee_id!}
                    >
                      {option.first_name} {option.last_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-between">
        <Button disabled variant="secondary">
          Back
        </Button>
        <Button disabled={!selectedNominee} isLink={"/vote/reason"}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default NominateForm;
