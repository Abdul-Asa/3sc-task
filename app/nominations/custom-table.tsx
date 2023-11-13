"use client";
import { useApp } from "@/lib/hooks/useAppContext";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "react-toastify";
import {
  cn,
  formatDate,
  formatProcess,
  getFullName,
  parseDate,
  subtractArrays,
} from "@/lib/utils";
import { deleteNomination } from "@/lib/server-actions";
import { Button } from "@/components/ui/button";

type CustomTableProps = {
  today: Date;
  type: "current" | "closed";
};

const CustomTable: React.FC<CustomTableProps> = ({ today, type }) => {
  const { nominations, nominees, setNominations } = useApp();
  const [openModal, setOpenModal] = useState(false);

  const closedList = nominations.filter((nomination) => {
    const closingDate = parseDate(nomination.closing_date!);
    today.setHours(0, 0, 0, 0);
    return closingDate < today;
  });

  const notify = () => toast("Nomination deleted successfully");

  const handleEdit = (id: string) => {
    console.log(`Edit: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete: ${id}`);
    deleteNomination(id)
      .then((res: any) => {
        console.log("success", res);
        notify();
        setNominations!(
          nominations.filter((nomination) => nomination.nomination_id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteNomination = () => {
    return (
      <button disabled={type == "closed"} onClick={() => setOpenModal(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M13.3333 5.00008V4.33341C13.3333 3.39999 13.3333 2.93328 13.1517 2.57676C12.9919 2.26316 12.7369 2.00819 12.4233 1.8484C12.0668 1.66675 11.6001 1.66675 10.6667 1.66675H9.33333C8.39991 1.66675 7.9332 1.66675 7.57668 1.8484C7.26308 2.00819 7.00811 2.26316 6.84832 2.57676C6.66667 2.93328 6.66667 3.39999 6.66667 4.33341V5.00008M8.33333 9.58342V13.7501M11.6667 9.58342V13.7501M2.5 5.00008H17.5M15.8333 5.00008V14.3334C15.8333 15.7335 15.8333 16.4336 15.5608 16.9684C15.3212 17.4388 14.9387 17.8212 14.4683 18.0609C13.9335 18.3334 13.2335 18.3334 11.8333 18.3334H8.16667C6.76654 18.3334 6.06647 18.3334 5.53169 18.0609C5.06129 17.8212 4.67883 17.4388 4.43915 16.9684C4.16667 16.4336 4.16667 15.7335 4.16667 14.3334V5.00008"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  return (
    <>
      {nominations.length === 0 ? (
        <EmptyState />
      ) : (
        <Table>
          <TableHeader className="font-poppins uppercase bg-greys-light">
            <TableRow>
              <TableHead>Nominee</TableHead>
              <TableHead>Date submitted</TableHead>
              <TableHead>Closing date</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Process</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody
            className={cn(
              "font-anonpro",
              type == "closed" && "text-greys-dark disabled"
            )}
          >
            {type === "closed" && closedList.length === 0 && (
              <ClosedNominations />
            )}
            {(type === "closed"
              ? closedList
              : subtractArrays(nominations, closedList)
            ).map((nomination) => (
              <TableRow key={nomination.nomination_id}>
                <TableCell className="max-w-[150px]">
                  <p className="truncate">
                    {getFullName(nominees, nomination.nominee_id!)}
                  </p>
                </TableCell>
                <TableCell className="max-w-[200px]">
                  <p className="truncate">
                    {formatDate(nomination.date_submitted!)}
                  </p>
                </TableCell>
                <TableCell className="max-w-[200px]">
                  <p className="truncate">
                    {formatDate(nomination.closing_date!)}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="truncate">{nomination.reason}</p>
                </TableCell>
                <TableCell className="max-w-[150px]">
                  <p className="truncate">
                    {formatProcess(nomination.process!)}
                  </p>
                </TableCell>
                <TableCell className="max-w-[120px] gap-4 flex">
                  <DeleteNomination />

                  <button
                    disabled={type == "closed"}
                    onClick={() => handleEdit(nomination.nomination_id!)}
                  >
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
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {openModal && (
        <>
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
          ></div>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-white shadow-md sm:rounded-lg sm:m-4 sm:fixed sm:inset-auto">
            <button onClick={() => setOpenModal(false)}>Close Modal</button>
          </div>
        </>
      )}
    </>
  );
};

export default CustomTable;

const EmptyState = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-evenly lg:justify-between h-full lg:h-1/2 w-1/2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
        >
          <path
            d="M87.414 38.3351L77.7447 18.8013C76.0843 15.3829 72.6659 13.2341 68.7592 13.2341H19.1432C15.2364 13.2341 11.9156 15.2852 10.1576 18.8013L0.488346 38.2375C0.195338 38.8235 0 39.5072 0 40.0932V66.3662C0 70.9567 3.71143 74.7658 8.39956 74.7658H79.6004C84.1909 74.7658 88 71.0543 88 66.3662V40.1908C87.9023 39.5072 87.707 38.8235 87.414 38.3351ZM60.9456 35.9911C58.9922 35.9911 57.3319 37.3584 56.8435 39.3118C56.7458 39.7025 54.4994 50.1531 43.8535 50.1531C33.5006 50.1531 31.1565 40.4839 30.8635 39.3118C30.4728 37.3584 28.8124 35.9911 26.7614 35.9911H10.939L17.6781 22.5127C17.9711 22.0244 18.5572 21.536 19.1432 21.536H68.7592C69.3452 21.536 69.9312 21.829 70.2242 22.5127L76.8657 35.9911H60.9456Z"
            fill="#C3C3C3"
          />
        </svg>
        <h1 className="text-sm lg:text-base font-poppins text-center text-greys-dark uppercase">
          once you submit a nomination, you will be able to view and edit it
          here.
        </h1>
        <Button isLink="/"> Submit a nomination</Button>
      </div>
    </div>
  );
};

const ClosedNominations = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-between h-1/2 w-1/2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          viewBox="0 0 88 88"
          fill="none"
        >
          <path
            d="M87.414 38.3351L77.7447 18.8013C76.0843 15.3829 72.6659 13.2341 68.7592 13.2341H19.1432C15.2364 13.2341 11.9156 15.2852 10.1576 18.8013L0.488346 38.2375C0.195338 38.8235 0 39.5072 0 40.0932V66.3662C0 70.9567 3.71143 74.7658 8.39956 74.7658H79.6004C84.1909 74.7658 88 71.0543 88 66.3662V40.1908C87.9023 39.5072 87.707 38.8235 87.414 38.3351ZM60.9456 35.9911C58.9922 35.9911 57.3319 37.3584 56.8435 39.3118C56.7458 39.7025 54.4994 50.1531 43.8535 50.1531C33.5006 50.1531 31.1565 40.4839 30.8635 39.3118C30.4728 37.3584 28.8124 35.9911 26.7614 35.9911H10.939L17.6781 22.5127C17.9711 22.0244 18.5572 21.536 19.1432 21.536H68.7592C69.3452 21.536 69.9312 21.829 70.2242 22.5127L76.8657 35.9911H60.9456Z"
            fill="#C3C3C3"
          />
        </svg>
        <h1 className=" font-poppins text-center text-greys-dark uppercase">
          There are currently no closed nominations.
        </h1>
        <Button> Submit a nomination</Button>
      </div>
    </div>
  );
};
