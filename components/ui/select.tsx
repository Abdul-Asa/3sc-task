"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex justify-between items-center border font-anonpro mt-2",
      "bg-primary-white h-10 w-full lg:w-1/2 px-3 py-1 border-greys-mid text-sm",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
      >
        <path
          d="M2 2L7 7L12 2"
          stroke="#F70087"
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "flex justify-between items-center cursor-pointer select-none relative py-2 px-4 bg-greys-light hover:bg-greys-mid",
      "text-primary-black hover:text-primary-white lg:focus:border-transparent font-anonpro",
      "transition-colors duration border-b-2 border-primary-white",
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 0C3.59984 0 0 3.59984 0 8C0 12.4002 3.59984 16 8 16C12.4002 16 16 12.4002 16 8C16 3.59984 12.4002 0 8 0ZM3.42841 5.71476C3.42841 5.08585 3.94268 4.57159 4.57159 4.57159C5.20049 4.57159 5.71476 5.08585 5.71476 5.71476C5.71476 6.34366 5.20049 6.85793 4.57159 6.85793C3.94268 6.85685 3.42841 6.34259 3.42841 5.71476ZM11.828 11.4852C10.7995 12.5137 9.37137 13.0848 8 13.0848C6.62863 13.0848 5.20049 12.5705 4.17197 11.4852C3.94377 11.257 3.94377 10.9142 4.17197 10.6849C4.40017 10.4567 4.74301 10.4567 4.9723 10.6849C6.62973 12.3423 9.37246 12.3423 11.0288 10.6849C11.257 10.4567 11.5998 10.4567 11.8291 10.6849C12.0573 10.9141 12.0573 11.257 11.8281 11.4852H11.828ZM11.4284 6.85683C10.7995 6.85683 10.2852 6.34257 10.2852 5.71366C10.2852 5.08475 10.7995 4.57049 11.4284 4.57049C12.0573 4.57049 12.5716 5.08475 12.5716 5.71366C12.5716 6.34257 12.0573 6.85683 11.4284 6.85683Z"
          fill="#F70087"
        />
      </svg>
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
