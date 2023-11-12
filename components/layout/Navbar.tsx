"use client";
import Link from "next/link";
import { FullLogo, ShortLogo } from "./Logo";
import { InboxIcon, PlusIcon } from "./Icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar({
  nominees,
  authToken,
}: {
  nominees?: any;
  authToken?: string;
}) {
  const [nominationsNumber, setNumber] = useState(nominees?.length);

  useEffect(() => {
    axios
      .get("https://cube-academy-api.cubeapis.com/api/nominees", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        setNumber(res.data.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <nav className="flex h-[72px] w-full box-border items-center justify-between px-[36px] text-primary-white bg-primary-black">
      <Link href="/">
        <FullLogo isHidden />
        <ShortLogo isHidden />
      </Link>
      <div className="flex items-center gap-4">
        {nominees ? (
          <>
            <Link
              href={"/nominations"}
              className="hidden lg:inline font-anonpro underline"
            >
              Your Nominations ({nominationsNumber})
            </Link>
            <PlusIcon className="inline lg:hidden" />
            <InboxIcon className="inline lg:hidden" />
          </>
        ) : (
          <button>Sign up</button>
        )}
      </div>
    </nav>
  );
}

//add types and interface to the components
