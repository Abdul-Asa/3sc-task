"use server";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { NominationReq } from "./types";
import { revalidatePath } from "next/cache";

const baseUrl = "https://cube-academy-api.cubeapis.com";

export async function submitLogin(formData: FormData) {
  const endpoint = `${baseUrl}/api/login`;
  try {
    const response = await axios.post(endpoint, formData);
    cookies().set("auth-token", response.data.data.authToken);
    revalidatePath("/");
    // Redirect will throw a NEXT_REDIRECT error, but this is expected behavior
    redirect("/", RedirectType.push);
  } catch (error) {
    // Don't catch redirect errors, let them bubble up
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      String(error.digest).includes("NEXT_REDIRECT")
    ) {
      throw error;
    }

    if (error instanceof AxiosError && error.response) {
      console.error(
        "There was an error submitting the form",
        error.response.data
      );
      // Return serializable error object
      return {
        success: false,
        error:
          error.response.data?.message ||
          error.response.data?.error ||
          "Login failed",
      };
    }
    console.error("There was an error submitting the form", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}

export async function submitRegister(formData: FormData) {
  const endpoint = `${baseUrl}/api/register`;
  try {
    const response = await axios.post(endpoint, formData);
    cookies().set("auth-token", response.data.data.authToken);
    revalidatePath("/");
    // Redirect will throw a NEXT_REDIRECT error, but this is expected behavior
    redirect("/", RedirectType.push);
  } catch (error) {
    // Don't catch redirect errors, let them bubble up
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      String(error.digest).includes("NEXT_REDIRECT")
    ) {
      throw error;
    }

    if (error instanceof AxiosError && error.response) {
      console.error(
        "There was an error submitting the form",
        error.response.data
      );
      // Return serializable error object
      return {
        success: false,
        error:
          error.response.data?.message ||
          error.response.data?.error ||
          "Registration failed",
      };
    }
    console.error("There was an error submitting the form", error);
    return {
      success: false,
      error: "An unexpected error occurred",
    };
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
