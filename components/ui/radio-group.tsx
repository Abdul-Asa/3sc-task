"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2 ", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square relative flex items-center justify-center lg:h-12 lg:w-12 lg:bg-greys-light text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-secondary-pink disabled:cursor-not-allowed disabled:opacity-50",
        " w-5 h-5 rounded-full  border-2 border-primary-pink lg:rounded-none lg:border-none",
        className
      )}
      {...props}
    >
      <div className="hidden lg:flex w-full h-full justify-center items-center">
        {children}
      </div>
      <RadioGroupPrimitive.Indicator className="absolute top-0 left-0 flex w-full h-full p-[1px] lg:p-0 lg:border-4  lg:border-secondary-pink items-center justify-center">
        <Circle
          className="lg:hidden text-secondary-pink"
          fill="rgb(244, 2, 86)"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
