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
    <div className="flex flex-col items-center justify-between h-full w-full ">
      <Image
        src={imageUrl}
        alt="Background"
        fill
        className="object-center object-cover h-60 w-full mb-4"
      />
      <h2 className="text-2xl font-bold ">{heading}</h2>
      <p className="">{description}</p>
      <div className="w-full ">{children}</div>
    </div>
  );
};

export { FormWrapper };
