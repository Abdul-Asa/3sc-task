import Provider from "@/components/forms/FormProvider";
import ProgressBar from "@/components/forms/ProgressBar";
import { cookies } from "next/headers";

export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider authToken={cookies().get("auth-token")?.value}>
      <section className="relative flex h-full lg:w-[800px] overflow-scroll lg:min-h-[500px] lg:max-h-[800px] w-full flex-col items-center  justify-center lg:p-8 bg-primary-white">
        <div className="bg-primary-black w-full lg:bg-transparent p-3 lg:p-0">
          <ProgressBar />
        </div>
        <div className=" flex h-full w-full">{children}</div>
      </section>
    </Provider>
  );
}
