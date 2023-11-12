"use client";
import { useFormContext } from "react-hook-form";
import React, { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { NomineeRes } from "@/lib/types";
import { radioOptions } from "../process/ProcessForm";
import StickyDrawer from "@/components/ui/StickyDrawer";

interface NomineesNameProps {
  nominees?: NomineeRes;
}

const OverviewForm: React.FC<NomineesNameProps> = ({ nominees }) => {
  const {
    watch,
    formState: { isSubmitting },
  } = useFormContext();
  const selectedId = watch("nominee_id");
  const reasonValue = watch("reason");
  const processValue = watch("process");
  const router = useRouter();

  useEffect(() => {
    if (!selectedId || !reasonValue || !processValue)
      router.push("/vote/nominate");
  }, []);

  const fullName =
    nominees?.find((nominee) => nominee.nominee_id === selectedId)?.first_name +
    " " +
    nominees?.find((nominee) => nominee.nominee_id === selectedId)?.last_name;

  const thoughts = radioOptions.find(
    (option) => option.value === processValue
  )?.label;

  return (
    <div className="px-4 lg:p-0   w-full h-full flex flex-col items-center justify-between">
      <div className="h-full flex flex-col w-full pb-4 lg:mb-1 lg:p-0 gap-1 font-poppins">
        <div className="h-full w-full p-2 px-4 bg-greys-light">
          <div className="flex justify-between w-full">
            <p className="lg:text-sm text-xs ">Cubes Name</p>
            <Link href={"/vote/nominate"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.39735 15.0963C2.43564 14.7517 2.45478 14.5794 2.50691 14.4184C2.55316 14.2755 2.61851 14.1396 2.70118 14.0142C2.79436 13.8729 2.91694 13.7503 3.16209 13.5052L14.1673 2.49992C15.0878 1.57945 16.5802 1.57945 17.5007 2.49993C18.4211 3.4204 18.4211 4.91279 17.5007 5.83326L6.49542 16.8385C6.25027 17.0836 6.1277 17.2062 5.98639 17.2994C5.86102 17.3821 5.72506 17.4474 5.58219 17.4937C5.42115 17.5458 5.24887 17.5649 4.90429 17.6032L2.08398 17.9166L2.39735 15.0963Z"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <p className="lg:text-sm text-xs font-anonpro">{fullName}</p>
        </div>
        <div className="h-full w-full p-2 px-4 bg-greys-light">
          <div className="flex justify-between w-full">
            <p className="lg:text-sm text-xs">Reasoning</p>
            <Link href={"/vote/reason"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.39735 15.0963C2.43564 14.7517 2.45478 14.5794 2.50691 14.4184C2.55316 14.2755 2.61851 14.1396 2.70118 14.0142C2.79436 13.8729 2.91694 13.7503 3.16209 13.5052L14.1673 2.49992C15.0878 1.57945 16.5802 1.57945 17.5007 2.49993C18.4211 3.4204 18.4211 4.91279 17.5007 5.83326L6.49542 16.8385C6.25027 17.0836 6.1277 17.2062 5.98639 17.2994C5.86102 17.3821 5.72506 17.4474 5.58219 17.4937C5.42115 17.5458 5.24887 17.5649 4.90429 17.6032L2.08398 17.9166L2.39735 15.0963Z"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <p className="lg:text-sm text-xs font-anonpro">{reasonValue}</p>
        </div>
        <div className="h-full w-full p-2 px-4 bg-greys-light">
          <div className="flex justify-between w-full">
            <p className="lg:text-sm text-xs">Thoughts on voting process</p>
            <Link href={"/vote/process"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.39735 15.0963C2.43564 14.7517 2.45478 14.5794 2.50691 14.4184C2.55316 14.2755 2.61851 14.1396 2.70118 14.0142C2.79436 13.8729 2.91694 13.7503 3.16209 13.5052L14.1673 2.49992C15.0878 1.57945 16.5802 1.57945 17.5007 2.49993C18.4211 3.4204 18.4211 4.91279 17.5007 5.83326L6.49542 16.8385C6.25027 17.0836 6.1277 17.2062 5.98639 17.2994C5.86102 17.3821 5.72506 17.4474 5.58219 17.4937C5.42115 17.5458 5.24887 17.5649 4.90429 17.6032L2.08398 17.9166L2.39735 15.0963Z"
                  stroke="black"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <p className="lg:text-sm text-xs font-anonpro">{thoughts}</p>
        </div>
      </div>

      <Button
        loading={isSubmitting}
        type="submit"
        className="my-2 hidden lg:block"
      >
        Submit
      </Button>
      <StickyDrawer type={"single"}>
        <Button type="submit" loading={isSubmitting}>
          Submit
        </Button>
      </StickyDrawer>
    </div>
  );
};

export default OverviewForm;

//add warning state for all input states
