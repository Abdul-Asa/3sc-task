import Link from "next/link";

export default async function Reason() {
  return (
    <div className="relative flex h-full lg:w-[800px] lg:h-[550px]  w-full flex-col items-center justify-center p-10 bg-primary-white">
      Reason
      <Link href={"/vote/process"}>
        <button>Lets go</button>{" "}
      </Link>
      <div className="fixed lg:hidden inset-x-0 bottom-0 z-10">
        <button className="w-full p-4 bg-primary-green text-white">
          Button Drawer
        </button>
      </div>
    </div>
  );
}

//abstract the components into a separate file
