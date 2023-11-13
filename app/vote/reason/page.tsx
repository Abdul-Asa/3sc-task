import { FormWrapper } from "@/components/forms/FormWrapper";
import ReasonForm, { NomineesName } from "@/components/forms/ReasonForm";

export default async function Reason() {
  return (
    <FormWrapper
      imageUrl={"/reason-img.jpeg"}
      heading={<NomineesName />}
      description={
        "Please let us know why you think this cube deserves the ‘cube of the month’ title 🏆⭐"
      }
    >
      <ReasonForm />
    </FormWrapper>
  );
}
