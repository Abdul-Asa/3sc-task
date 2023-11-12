"use client";
import { useFormContext } from "react-hook-form";
import Button from "../../../components/ui/Button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import StickyDrawer from "@/components/ui/StickyDrawer";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

export interface CustomSelectProps {
  placeholder?: string;
}
export const radioOptions = [
  {
    id: "veryunfair",
    value: "very_unfair",
    label: "Very Unfair",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M17.5008 0C7.875 0 0 7.875 0 17.5008C0 27.1266 7.875 35.0016 17.5008 35.0016C27.1266 35.0016 35.0016 27.1266 35.0016 17.5008C35.0016 7.875 27.1266 0 17.5008 0ZM7.5 12.5016C7.5 11.1258 8.625 10.0008 10.0008 10.0008C11.3766 10.0008 12.5016 11.1258 12.5016 12.5016C12.5016 13.8774 11.3766 15.0024 10.0008 15.0024C8.625 15.0001 7.5 13.8751 7.5 12.5016ZM25.0008 15C23.625 15 22.5 13.875 22.5 12.4992C22.5 11.1234 23.625 9.9984 25.0008 9.9984C26.3766 9.9984 27.5016 11.1234 27.5016 12.4992C27.5016 13.875 26.3766 15 25.0008 15Z"
          fill="black"
        />
        <path
          d="M17.5006 21.3584C20.5006 21.3584 23.6248 22.6076 25.8748 24.8576C26.3763 25.3569 26.3764 26.1068 25.8772 26.6084C25.8772 26.6084 25.1448 26.6439 24.1264 26.6084C20.5007 26.4819 19.9076 26.4813 17.5007 26.4819C15.0953 26.4824 10.8772 26.6084 10.8772 26.6084H9.12637C8.62715 26.1068 8.62715 25.3568 9.12637 24.8576C11.3764 22.4834 14.5006 21.3584 17.5006 21.3584Z"
          fill="#F8F8F8"
        />
      </svg>
    ),
  },
  {
    id: "unfair",
    value: "unfair",
    label: "Unfair",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M17.5008 0.00195312C7.875 0.00195312 0 7.87695 0 17.5028C0 27.1285 7.875 35.0035 17.5008 35.0035C27.1266 35.0035 35.0016 27.1285 35.0016 17.5028C35.0016 7.87695 27.1266 0.00195312 17.5008 0.00195312ZM7.5 12.5036C7.5 11.1278 8.625 10.0028 10.0008 10.0028C11.3766 10.0028 12.5016 11.1278 12.5016 12.5036C12.5016 13.8794 11.3766 15.0043 10.0008 15.0043C8.625 15.002 7.5 13.877 7.5 12.5036ZM25.0008 15.002C23.625 15.002 22.5 13.877 22.5 12.5012C22.5 11.1254 23.625 10.0003 25.0008 10.0003C26.3766 10.0003 27.5016 11.1254 27.5016 12.5012C27.5016 13.877 26.3766 15.002 25.0008 15.002Z"
          fill="black"
        />
        <path
          d="M17.5006 21.0017C20.5006 21.0017 23.6248 22.2509 25.8748 24.5009C26.3763 25.0002 26.3764 25.7501 25.8772 26.2517C25.3756 26.7509 24.6256 26.7509 24.1264 26.2517C20.503 22.6259 14.503 22.6259 10.8772 26.2517C10.3756 26.7509 9.62558 26.7509 9.12637 26.2517C8.62715 25.7501 8.62715 25.0001 9.12637 24.5009C11.3764 22.1267 14.5006 21.0017 17.5006 21.0017Z"
          fill="#F8F8F8"
        />
      </svg>
    ),
  },
  {
    id: "not-sure",
    value: "not_sure",
    label: "Not Sure",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M0 17.5037C0 7.87793 7.875 0.00292969 17.5008 0.00292969C27.1266 0.00292969 35.0016 7.87793 35.0016 17.5037C35.0016 27.1295 27.1266 35.0045 17.5008 35.0045C7.875 35.0045 0 27.1295 0 17.5037Z"
          fill="black"
        />
        <circle
          cx="10.001"
          cy="12.5039"
          r="2"
          fill="#F8F8F8"
          stroke="#F8F8F8"
        />
        <circle
          cx="25.001"
          cy="12.5039"
          r="2"
          fill="#F8F8F8"
          stroke="#F8F8F8"
        />
        <line
          x1="9.00098"
          y1="23.5039"
          x2="26.001"
          y2="23.5039"
          stroke="#F8F8F8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "fair",
    value: "fair",
    label: "Fair",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M17.5008 0.00488281C7.875 0.00488281 0 7.87988 0 17.5057C0 27.1315 7.875 35.0065 17.5008 35.0065C27.1266 35.0065 35.0016 27.1315 35.0016 17.5057C35.0016 7.87988 27.1266 0.00488281 17.5008 0.00488281ZM7.5 12.5065C7.5 11.1307 8.625 10.0057 10.0008 10.0057C11.3766 10.0057 12.5016 11.1307 12.5016 12.5065C12.5016 13.8823 11.3766 15.0073 10.0008 15.0073C8.625 15.0049 7.5 13.8799 7.5 12.5065ZM25.875 25.1299C23.625 27.3799 20.5008 28.6291 17.5008 28.6291C14.5008 28.6291 11.3766 27.5041 9.1266 25.1299C8.62738 24.6307 8.62738 23.8807 9.1266 23.3791C9.62582 22.8799 10.3758 22.8799 10.8774 23.3791C14.5032 27.0049 20.5032 27.0049 24.1266 23.3791C24.6258 22.8799 25.3758 22.8799 25.8774 23.3791C26.3766 23.8806 26.3766 24.6306 25.8751 25.1299H25.875ZM25.0008 15.0049C23.625 15.0049 22.5 13.8799 22.5 12.5041C22.5 11.1283 23.625 10.0033 25.0008 10.0033C26.3766 10.0033 27.5016 11.1283 27.5016 12.5041C27.5016 13.8799 26.3766 15.0049 25.0008 15.0049Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    id: "very-fair",
    value: "very_fair",
    label: "Very Fair",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M17.5008 0.0078125C7.875 0.0078125 0 7.88281 0 17.5086C0 27.1344 7.875 35.0094 17.5008 35.0094C27.1266 35.0094 35.0016 27.1344 35.0016 17.5086C35.0016 7.88281 27.1266 0.0078125 17.5008 0.0078125ZM7.5 12.5094C7.5 11.1336 8.625 10.0086 10.0008 10.0086C11.3766 10.0086 12.5016 11.1336 12.5016 12.5094C12.5016 13.8852 11.3766 15.0102 10.0008 15.0102C8.625 15.0079 7.5 13.8829 7.5 12.5094ZM25.875 25.1328C23.625 27.3828 20.5008 28.632 17.5008 28.632C14.5008 28.632 11.3766 27.507 9.1266 25.1328C8.62738 24.6336 8.62738 23.8836 9.1266 23.382H10.8774C10.8774 23.382 15.0955 23.508 17.501 23.5085C19.9078 23.5091 20.501 23.5085 24.1266 23.382C25.1451 23.3465 25.8774 23.382 25.8774 23.382C26.3766 23.8836 26.3766 24.6335 25.875 25.1328ZM25.0008 15.0078C23.625 15.0078 22.5 13.8828 22.5 12.507C22.5 11.1312 23.625 10.0062 25.0008 10.0062C26.3766 10.0062 27.5016 11.1312 27.5016 12.507C27.5016 13.8828 26.3766 15.0078 25.0008 15.0078Z"
          fill="black"
        />
      </svg>
    ),
  },
];

const sliderOptions = [
  "very_unfair",
  "unfair",
  "not_sure",
  "fair",
  "very_fair",
];

const ProcessForm: React.FC<CustomSelectProps> = ({ placeholder }) => {
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
                value={[sliderOptions.indexOf(field.value)]}
                className="lg:flex hidden"
                onValueChange={(value) =>
                  field.onChange(sliderOptions[value[0]])
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
