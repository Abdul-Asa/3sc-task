"use client";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import StickyDrawer from "@/components/ui/sticky-drawer";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { CustomFormProps } from "@/lib/types";
import { processOptions, radioOptions } from "@/lib/constants";

const ProcessForm: React.FC<CustomFormProps> = ({ placeholder }) => {
  const router = useRouter();
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const processValue = watch("process");
  const hasProcessErrors = !!errors.process;

  useEffect(() => {
    const nomineeIdValue = watch("nominee_id");
    const reasonValue = watch("reason");
    if (!nomineeIdValue || !reasonValue) router.push("/vote/nominate");
  }, []);

  return (
    <div className="h-full w-full ">
      <FormField
        control={control}
        name="process"
        render={({ field }) => (
          <FormItem className="flex flex-col justify-between h-full">
            <div className="flex px-4 lg:px-10 pt-2 items-center  flex-col justify-between h-full">
              <Slider
                max={4}
                step={1}
                value={[processOptions.indexOf(field.value)]}
                className="lg:flex hidden"
                onValueChange={(value) =>
                  field.onChange(processOptions[value[0]])
                }
              />
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex justify-between flex-col lg:flex-row items-center font-anonpro w-full "
                >
                  {radioOptions.map((option) => (
                    <FormItem
                      key={option.id}
                      className="flex flex-row-reverse lg:shadow-none lg:hover:shadow-none lg:hover:bg-transparent shadow-light hover:shadow-strong  hover:bg-greys-light p-3 lg:flex-col lg:justify-center justify-between w-full items-center lg:gap-2 space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={option.value}>
                          {option.svg}
                        </RadioGroupItem>
                      </FormControl>
                      <div className="flex items-center">
                        <div className="lg:hidden mr-4">{option.svg}</div>
                        <FormLabel className="pt-1 font-poppins lg:font-anonpro">
                          {option.label}
                        </FormLabel>
                      </div>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </div>
            <div className="lg:flex hidden justify-between">
              <Button variant="secondary" isLink="/vote/reason">
                Back
              </Button>
              <Button
                disabled={hasProcessErrors || !processValue}
                isLink={"/vote/overview"}
              >
                Next
              </Button>
            </div>
            <StickyDrawer type="horizontal">
              <Button variant="secondary" isLink="/vote/reason" inDrawer>
                Back
              </Button>
              <Button
                disabled={hasProcessErrors || !processValue}
                isLink={"/vote/overview"}
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

export default ProcessForm;

//add warning state for all input states
