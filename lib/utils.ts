import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NominationRes, NomineeRes } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function subtractArrays(array1: NominationRes, array2: NominationRes) {
  return array1.filter((obj1) => {
    return !array2.some((obj2) => obj1.nomination_id === obj2.nomination_id);
  });
}
export const getFullName = (nominees: NomineeRes, nominee_id: string) => {
  const firstname = nominees.find(
    (nominee) => nominee.nominee_id === nominee_id
  )?.first_name;
  const lastname = nominees.find(
    (nominee) => nominee.nominee_id === nominee_id
  )?.last_name;
  return [firstname, lastname].join(" ");
};

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year.slice(-2)}`; // returns "DD/MM/YY"
};

export const formatProcess = (processString: string) => {
  return processString
    .replace("_", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()); // returns "Very Fair" for "very_fair"
};
