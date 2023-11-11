import Image from "next/image";
import React, { ReactNode } from "react";

interface FormWrapperProps {
  imageUrl: string;
  heading: string;
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
    <div className="flex flex-col justify-between h-full pt-6 w-full ">
      <div className="w-full min-h-[35%] relative ">
        <Image
          src={imageUrl}
          fill
          className="object-cover object-center"
          alt="Background image"
        />
      </div>
      <div className="flex gap-4 flex-col w-5/6 py-6">
        <h1 className=" font-bold uppercase text-lg lg:text-[24px] font-poppins ">
          {heading}
        </h1>
        <p className="font-anonpro text-sm lg:text-[16px]">{description}</p>
      </div>

      <div className="w-full h-full ">{children}</div>
    </div>
  );
};

export { FormWrapper };
