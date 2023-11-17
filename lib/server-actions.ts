"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { NominationReq } from "./types";

const baseUrl = "https://cube-academy-api.cubeapis.com";

export async function submitLogin(formData: FormData) {
  const endpoint = `${baseUrl}/api/login`;
  try {
    const response = await axios.post(endpoint, formData);
    cookies().set("auth-token", response.data.data.authToken);
    if (cookies().get("auth-token")) {
      redirect("/", RedirectType.push);
    }
    return response.data;
  } catch (error: any) {
    console.error("There was an error submitting the form", error.response);
    return error.response.data;
  }
}

export async function submitRegister(formData: FormData) {
  const endpoint = `${baseUrl}/api/register`;
  try {
    const response = await axios.post(endpoint, formData);
    cookies().set("auth-token", response.data.data.authToken);
    if (cookies().get("auth-token")) {
      redirect("/", RedirectType.push);
    }
    return response.data;
  } catch (error: any) {
    console.error("There was an error submitting the form", error.response);
    return error.response.data;
  }
}

export async function getNomination() {
  let auth = cookies().get("auth-token")?.value;

  const endpoint = `${baseUrl}/api/nomination`;
  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };
  try {
    const response = await axios.get(endpoint, config);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getNominees() {
  let auth = cookies().get("auth-token")?.value;

  const endpoint = `${baseUrl}/api/nominee`;
  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };
  try {
    const response = await axios.get(endpoint, config);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createNomination(data: NominationReq) {
  let auth = cookies().get("auth-token")?.value;

  const endpoint = `${baseUrl}/api/nomination`;
  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };
  try {
    return axios.post(endpoint, data, config);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteNomination(id: string) {
  let auth = cookies().get("auth-token")?.value;
  console.log(id);
  console.log(auth);
  const endpoint = `${baseUrl}/api/nomination/${id}`;
  const config = {
    headers: { Authorization: `Bearer ${auth}` },
  };
  try {
    return axios.delete(endpoint, config);
  } catch (error) {
    console.error(error);
  }
}
