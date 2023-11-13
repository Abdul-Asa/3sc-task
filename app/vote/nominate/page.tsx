import { FormWrapper } from "@/components/forms/FormWrapper";
import NominateForm from "@/components/forms/NominateForm";

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
