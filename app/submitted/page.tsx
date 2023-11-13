import Image from "next/image";
import { Button } from "@/components/ui/Button";
import StickyDrawer from "@/components/ui/sticky-drawer";

export default async function Home() {
  return (
    <div className="relative flex w-full h-full items-center lg:pt-10 lg:pb-20 justify-center z-[1]">
      <div className="relative flex h-full lg:w-[800px] lg:min-h-[500px] lg:max-h-[800px]  w-full flex-col items-center pb-10 justify-evenly gap-6 bg-primary-white">
        <div className="w-full h-full relative ">
          <Image
            src="/submitted-img.jpeg"
            fill
            className="object-cover object-center"
            alt="The cubes at the beach"
          />
        </div>
        <div className="w-full p-6 lg:px-20 mb-32 lg:m-0 py-2 flex flex-col justify-center text-center relative gap-2 lg:gap-6">
          <h1 className=" font-bold uppercase text-lg lg:text-[32px] font-poppins ">
            NOMINATION SUBMITTED
          </h1>
          <p className="font-anonpro text-sm lg:text-[16px]">
            Thank you for taking the time to fill out this form! Why not
            nominate another cube?{" "}
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          <Button variant="secondary" className="lg:block hidden" isLink={"/"}>
            Create new nomination
          </Button>
          <Button
            variant="secondary"
            className="lg:block hidden"
            isLink={"/nominations"}
          >
            View nominations
          </Button>
        </div>
        <StickyDrawer type="horizontal">
          <Button
            variant="secondary"
            className="lg:hidden block text-sm"
            inDrawer
            isLink={"/"}
          >
            Create new nomination
          </Button>
          <Button
            variant="secondary"
            className="lg:hidden block text-sm"
            inDrawer
            isLink={"/nominations"}
          >
            View nominations
          </Button>
        </StickyDrawer>
      </div>
    </div>
  );
}
