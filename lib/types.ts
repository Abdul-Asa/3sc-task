export type NominationRes = {
  nomination_id: string;
  nominee_id: string;
  reason: string;
  process: string;
  date_submitted: string;
  closing_date: string;
}[];

export type NominationReq = {
  nominee_id: string;
  reason: string;
  process: string;
};

export type NomineeRes = {
  nominee_id: string;
  first_name: string;
  last_name: string;
}[];

export interface CustomFormProps {
  placeholder: string;
}

export type DeleteNominationRes = {
  data: string;
};
