import { FormWrapper } from "@/components/form/FormWrapper";
import OverviewForm from "./OverviewForm";
import axios from "axios";
import { cookies } from "next/headers";

export default async function Overview() {
  return (
    <FormWrapper
      imageUrl={"/overview-img.jpeg"}
      heading={"nomination overview"}
      description={
        "Thank you for taking the time to nominate a fellow cube. Please check your answers before submitting."
      }
    >
      <OverviewForm />
    </FormWrapper>
  );
}

//abstract the props passed down into a separate file
