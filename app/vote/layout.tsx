import Provider from "@/components/form/FormProvider";
import ProgressBar from "@/components/form/ProgressBar";

const lol = 2;
export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <section className="relative flex h-full  lg:w-[800px] lg:min-h-[500px] lg:max-h-[800px] w-full flex-col items-center justify-center p-10 bg-primary-white">
        <ProgressBar />
        <div className=" flex h-full w-full">{children}</div>
      </section>
    </Provider>
  );
}
