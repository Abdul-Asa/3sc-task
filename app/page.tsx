import Link from "next/link";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/button";
import StickyDrawer from "@/components/ui/sticky-drawer";

export default async function Home() {
  const isAuthenticated = cookies().get("auth-token");
  if (!isAuthenticated) {
    redirect("/register", RedirectType.replace);
  }

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

//Refactor mmessy code
//Seperate svg Icons into seperate files
//add a loading spinner
//restructure file system

//add Modals
//figure out the eventleave thing
//Seperate server actions into seperate files
//redesign reegister page
