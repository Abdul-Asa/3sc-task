import { FormWrapper } from "@/components/form/FormWrapper";
import ReasonForm, { NomineesName } from "./ReasonForm";
import { cookies } from "next/headers";
import axios from "axios";

export default async function Reason() {
  let nominees = null;
  const auth = cookies().get("auth-token")?.value;
  async function getNominees() {
    const endpoint = "https://cube-academy-api.cubeapis.com/api/nominee";
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
  if (auth) nominees = await getNominees();

  return (
    <FormWrapper
      imageUrl={"/reason-img.jpeg"}
      heading={<NomineesName nominees={nominees} />}
      description={
        "Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐"
      }
    >
      <ReasonForm />
    </FormWrapper>
  );
}
