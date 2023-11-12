import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface StickyDrawerProps {
  type: "single" | "vertical" | "horizontal";
  children: ReactNode;
}

const StickyDrawer: React.FC<StickyDrawerProps> = ({ type, children }) => {
  const containerClasses = cn(
    "fixed lg:hidden inset-x-0 bottom-0 z-10 min-h-[92px] border p-4 bg-primary-white flex justify-center shadow-custom items-center"
  );

  const buttonContainerClasses = cn({
    "flex items-center justify-center": type === "single",
    "flex flex-col items-center space-y-4": type === "vertical",
    "flex items-center justify-between w-full space-x-4": type === "horizontal",
  });

  return (
    <div className={containerClasses}>
      <div className={buttonContainerClasses}>{children}</div>
    </div>
  );
};

export default StickyDrawer;
