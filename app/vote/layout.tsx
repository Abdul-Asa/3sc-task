import Provider from "@/components/form/FormProvider";
import ProgressBar from "@/components/form/ProgressBar";

export default function VoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <section className="relative flex h-full lg:w-[800px] lg:h-[550px]  w-full flex-col items-center justify-center p-10 bg-primary-white">
        <ProgressBar />
        <div className=" flex h-full w-full">{children}</div>
      </section>
    </Provider>
  );
}
