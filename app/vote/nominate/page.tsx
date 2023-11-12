import { FormWrapper } from "@/components/form/FormWrapper";
import NominateForm from "@/app/vote/nominate/NominateForm";
import axios from "axios";
import { cookies } from "next/headers";

export default async function Nominate() {
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
      imageUrl={"/nominate-img.jpeg"}
      heading={"I’d like to nominate... "}
      description={
        "Please select a cube who you feel has done something honourable this month or just all round has a great work ethic."
      }
    >
      <NominateForm options={nominees} placeholder="Select Option" />
    </FormWrapper>
  );
}

//abstract the props passed down into a separate file
