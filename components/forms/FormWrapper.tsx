import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";

interface FormWrapperProps {
  imageUrl: string;
  heading: ReactNode;
  description: string;
  children: ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  imageUrl,
  heading,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col justify-between h-full lg:pt-6 w-full ">
      <div className="w-full min-h-[35%] relative ">
        <Image
          src={imageUrl}
          fill
          className="object-cover object-center"
          alt="Background image"
          unoptimized={true}
        />
      </div>
      <div
        className={cn(
          "flex gap-3 px-4 lg:px-0 flex-col w-full lg:w-5/6 py-3",
          heading?.toString().includes("overview") &&
            "lg:w-full text-center items-center pb-2 gap-1"
        )}
      >
        <h1 className=" font-bold uppercase lg:text-[24px] font-poppins ">
          {heading}
        </h1>
        <p className="font-anonpro text-xs lg:text-[16px]">{description}</p>
      </div>
      {children}
    </div>
  );
};

export { FormWrapper };
