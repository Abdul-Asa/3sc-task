"use client";
import { useApp } from "@/lib/hooks/useAppContext";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { NomineeRes } from "@/lib/types";
import axios from "axios";

type CustomTableProps = {};

const CustomTable: React.FC<CustomTableProps> = () => {
  const { nominations, nominees, authToken, setNominations } = useApp();

  const handleEdit = (id: string) => {
    console.log(`Edit: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete: ${id}`);
    axios
      .delete(`https://cube-academy-api.cubeapis.com/api/nomination/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res: any) => {
        console.log("success", res);
        setNominations!(
          nominations.filter((nomination) => nomination.nomination_id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFullName = (nominees: NomineeRes, nominee_id: string) => {
    const firstname = nominees.find(
      (nominee) => nominee.nominee_id === nominee_id
    )?.first_name;
    const lastname = nominees.find(
      (nominee) => nominee.nominee_id === nominee_id
    )?.last_name;
    return [firstname, lastname].join(" ");
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year.slice(-2)}`; // returns "DD/MM/YY"
  };

  // Helper function to capitalize and replace underscores with spaces for ratings
  const formatProcess = (processString: string) => {
    return processString
      .replace("_", " ")
      .replace(/\b\w/g, (char) => char.toUpperCase()); // returns "Very Fair" for "very_fair"
  };

  return (
    <Table>
      <TableHeader className="font-poppins uppercase bg-greys-light">
        <TableRow>
          <TableHead className="w-[150px]">Nominee</TableHead>
          <TableHead className="w-[200px]">Date submitted</TableHead>
          <TableHead className="w-[200px]">Closing date</TableHead>
          <TableHead>Reason</TableHead>
          <TableHead className="w-[150px]">Process</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="font-anonpro">
        {nominations.map((nomination) => (
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
              <p className="truncate">{formatDate(nomination.closing_date!)}</p>
            </TableCell>
            <TableCell>
              <p className="truncate">{nomination.reason}</p>
            </TableCell>
            <TableCell className="max-w-[150px]">
              <p className="truncate">{formatProcess(nomination.process!)}</p>
            </TableCell>
            <TableCell className="max-w-[120px] gap-4 flex">
              <button onClick={() => handleDelete(nomination.nomination_id!)}>
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
              <button onClick={() => handleEdit(nomination.nomination_id!)}>
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
  );
};

export default CustomTable;
