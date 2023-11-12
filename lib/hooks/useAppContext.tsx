"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { NominationRes, NomineeRes } from "../types";
import App from "next/app";

export interface AppContextProps {
  nominees: NomineeRes;
  authToken: string;
  nominations: NominationRes;
  setNominees?: React.Dispatch<React.SetStateAction<NomineeRes>>;
  setNominations?: React.Dispatch<React.SetStateAction<NominationRes>>;
  setAuthToken?: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps>({
  nominees: [],
  nominations: [],
  authToken: "",
});

export const useApp = () => useContext(AppContext);

export const AppProvider = ({
  children,
  initialValues,
}: {
  children: React.ReactNode;
  initialValues: AppContextProps;
}) => {
  const [authToken, setAuthToken] = useState(initialValues.authToken);
  const [nominees, setNominees] = useState(initialValues.nominees);
  const [nominations, setNominations] = useState(initialValues.nominations);
  useEffect(() => {
    setAuthToken(initialValues.authToken);
    setNominees(initialValues.nominees);
    setNominations(initialValues.nominations);
  }, [
    initialValues.authToken,
    initialValues.nominees,
    initialValues.nominations,
  ]);

  return (
    <AppContext.Provider
      value={{
        authToken,
        nominees,
        nominations,
        setAuthToken,
        setNominations,
        setNominees,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
