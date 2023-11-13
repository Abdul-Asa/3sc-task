import { FormWrapper } from "@/components/forms/FormWrapper";
import OverviewForm from "@/components/forms/OverviewForm";

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
