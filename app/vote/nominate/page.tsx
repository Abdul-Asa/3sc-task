import { FormWrapper } from "@/components/form/FormWrapper";
import NominateForm from "@/app/vote/nominate/NominateForm";
import axios from "axios";
import { cookies } from "next/headers";

export default async function Nominate() {
  return (
    <FormWrapper
      imageUrl={"/nominate-img.jpeg"}
      heading={"I’d like to nominate... "}
      description={
        "Please select a cube who you feel has done something honourable this month or just all round has a great work ethic."
      }
    >
      <NominateForm placeholder="Select Option" />
    </FormWrapper>
  );
}

//abstract the props passed down into a separate file
