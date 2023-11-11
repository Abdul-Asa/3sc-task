import Link from "next/link";
import { FullLogo, ShortLogo } from "./Logo";
import { InboxIcon, PlusIcon } from "./Icons";
export default function Navbar({ nominees }: { nominees?: any }) {
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
              Your Nominations ({nominees.length})
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
