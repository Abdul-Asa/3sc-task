"use client";
import { FormWrapper } from "@/components/form/FormWrapper";

export default function Nominate() {
  return (
    <FormWrapper
      imageUrl={"/nominate-img.jpeg"}
      heading={"I’d like to nominate... "}
      description={
        "Please select a cube who you feel has done something honourable this month or just all round has a great work ethic."
      }
    >
      Hello
    </FormWrapper>
  );
}

//abstract the props passed down into a separate file
