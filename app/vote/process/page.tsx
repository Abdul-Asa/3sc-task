import ProcessForm from "./ProcessForm";
import { FormWrapper } from "@/components/form/FormWrapper";

export default async function Process() {
  return (
    <FormWrapper
      imageUrl={"/process-img.jpeg"}
      heading={"IS HOW WE CURRENTLY RUN CUBE OF THE MONTH FAIR?"}
      description={
        "As you know, out the nominees chosen, we spin a wheel to pick the cube of the month. What’s your opinion on this method?"
      }
    >
      <ProcessForm />
    </FormWrapper>
  );
}
