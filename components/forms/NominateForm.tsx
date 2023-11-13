"use client";
import { CustomFormProps, NomineeRes } from "@/lib/types";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import StickyDrawer from "@/components/ui/sticky-drawer";
import { useApp } from "@/lib/hooks/useAppContext";
import { Button } from "../ui/button";

const NominateForm: React.FC<CustomFormProps> = ({ placeholder }) => {
  const options = useApp().nominees as NomineeRes;
  const { control, watch } = useFormContext();

  const nomineeIdValue = watch("nominee_id");

  return (
    <div className="px-4 lg:px-0 h-full w-full">
      <FormField
        control={control}
        name="nominee_id"
        render={({ field }) => (
          <FormItem className="flex flex-col justify-between h-full">
            <div>
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
            </div>
            <FormMessage />
            <div className="lg:flex hidden justify-between">
              <Button variant="secondary">Back</Button>
              <Button disabled={!nomineeIdValue} isLink={"/vote/reason"}>
                Next
              </Button>
            </div>
            <StickyDrawer type="horizontal">
              <Button inDrawer variant="secondary">
                Back
              </Button>
              <Button
                disabled={!nomineeIdValue}
                isLink={"/vote/reason"}
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

export default NominateForm;
