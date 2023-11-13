"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const ProgressBar = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case "/vote/nominate":
        setProgress(25);
        break;
      case "/vote/reason":
        setProgress(50);
        break;
      case "/vote/process":
        setProgress(75);
        break;
      case "/vote/overview":
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  }, [pathname]);

  return (
    <div className="w-full bg-gray-200 h-2">
      <div
        className="bg-pink-500 h-2"
        style={{ width: `${progress}%`, transition: "width 0.3s" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
