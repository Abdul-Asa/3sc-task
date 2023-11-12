"use client";
import Link from "next/link";
import { FullLogo, ShortLogo } from "./Logo";
import { InboxIcon, PlusIcon } from "./Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useApp } from "@/lib/hooks/useAppContext";

export default function Navbar() {
  const { nominations, authToken, setNominations } = useApp();

  useEffect(() => {
    axios
      .get("https://cube-academy-api.cubeapis.com/api/nominations", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        setNominations!(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authToken, nominations]);

  return (
    <nav className="flex h-[72px] w-full box-border items-center justify-between px-[36px] text-primary-white bg-primary-black">
      <Link href="/">
        <FullLogo isHidden />
        <ShortLogo isHidden />
      </Link>
      <div className="flex items-center gap-4">
        {nominations ? (
          <>
            <Link
              href={"/nominations"}
              className="hidden lg:inline font-anonpro underline"
            >
              Your Nominations ({nominations.length})
            </Link>
            <PlusIcon className="inline lg:hidden" />
            <span className="z-[1] bg-transparent relative inline lg:hidden">
              <InboxIcon />
              <span className="absolute -top-2 -right-4 flex items-center justify-center bg-primary-pink rounded-full w-5 h-5 text-[9px] z-[-1] text-primary-white">
                {nominations.length}
              </span>
            </span>
          </>
        ) : (
          <button>Sign up</button>
        )}
      </div>
    </nav>
  );
}

//add types and interface to the components
