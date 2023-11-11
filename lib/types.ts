export interface FormValues {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  billing: "monthly" | "yearly";
  addons: {
    online: boolean;
    storage: boolean;
    profile: boolean;
  };
}

export type NominationReq = {
  nominee_id?: string;
  reason?: string;
  process?: string;
};

export type NomineeRes = {
  nominee_id?: string;
  first_name?: string;
  last_name?: string;
}[];
