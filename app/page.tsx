import Image from "next/image";
import StickyDrawer from "@/components/ui/sticky-drawer";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="relative flex w-full h-full items-center lg:pt-10 lg:pb-20 justify-center z-[1]">
      <div className="relative flex h-full lg:w-[800px] lg:min-h-[500px] lg:max-h-[800px]  w-full flex-col items-center pb-10 justify-evenly gap-6 bg-primary-white">
        <div className="w-full h-full relative ">
          <Image
            src="/3SC-home-image.jpeg"
            fill
            className="object-cover object-center"
            alt="Person at a schedule board"
          />
        </div>
        <div className="w-full p-6 lg:px-20 mb-32 lg:m-0 py-2 flex flex-col justify-center text-center relative gap-2 lg:gap-6">
          <h1 className=" font-bold uppercase text-lg lg:text-[32px] font-poppins ">
            CUBE OF THE MONTH NOMINATIONS
          </h1>
          <p className="font-anonpro text-sm lg:text-[16px]">
            At cube we’re passionate about recognising the great work that our
            cubes do. Each month one of our cubes are crowned cube of the month
            👑⭐. Please nominate who you think deserves this months title.
          </p>
        </div>{" "}
        <Button
          variant="primary"
          className="lg:block hidden"
          isLink={"/vote/nominate"}
        >
          Get started
        </Button>
        <StickyDrawer type="single">
          <Button variant="primary" inDrawer isLink={"/vote/nominate"}>
            Get started
          </Button>
        </StickyDrawer>
      </div>
    </div>
  );
}

//TODO
//add Meta data
//seperate svg icons into Icon file
//break down custom table
//add comments and refactorr messy code
