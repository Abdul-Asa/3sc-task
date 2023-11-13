import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
  inDrawer?: boolean;
  isLink?: string; // URL for the link
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading,
  className,
  disabled,
  inDrawer,
  isLink,
  ...props
}) => {
  const baseStyles =
    "px-[17.5px] py-2 uppercase font-poppins h-12 text-sm shadow-light";
  const primaryStyles = "bg-primary-black text-primary-white";
  const secondaryStyles =
    "bg-primary-white text-primary-black border-2 border-primary-black";
  const hoverStyles = {
    primary:
      "hover:bg-primary-white hover:text-primary-black hover:border-primary-black hover:border-2",
    secondary: "hover:border-primary-pink",
  };
  const disabledStyles = {
    primary:
      "disabled:bg-greys-mid disabled:hover:border-greys-mid disabled:hover:text-primary-white",
    secondary: "disabled:border-greys-mid disabled:text-greys-dark ",
  };

  const buttonContent = (
    <button
      className={cn(
        baseStyles,
        variant === "primary" ? primaryStyles : secondaryStyles,
        hoverStyles[variant],
        disabledStyles[variant],
        className,
        !inDrawer && "w-60"
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );

  return isLink ? <Link href={isLink}>{buttonContent}</Link> : buttonContent;
};

export { Button };

//fix disabled and loading types later
