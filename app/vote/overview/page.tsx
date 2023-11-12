import { FormWrapper } from "@/components/form/FormWrapper";
import OverviewForm from "./OverviewForm";
import axios from "axios";
import { cookies } from "next/headers";

export default async function Overview() {
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
      imageUrl={"/overview-img.jpeg"}
      heading={"nomination overview"}
      description={
        "Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting."
      }
    >
      <OverviewForm nominees={nominees} />
    </FormWrapper>
  );
}

//abstract the props passed down into a separate file
