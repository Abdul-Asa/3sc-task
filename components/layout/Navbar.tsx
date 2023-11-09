import Link from "next/link";
import { FullLogo, ShortLogo } from "./Logo";
import { InboxIcon, PlusIcon } from "./Icons";
export default function Navbar() {
  return (
    <nav className="flex h-[72px] w-full box-border items-center justify-between px-[36px] bg-primary-black z-10">
      <Link href="/">
        <FullLogo className="hidden lg:inline" />
        <ShortLogo className="inline lg:hidden" />
      </Link>
      <div className="flex items-center gap-6">
        <p className="hidden lg:inline font-anonpro underline">
          Your Nominations (3)
        </p>
        <PlusIcon className="inline lg:hidden" />
        <InboxIcon className="inline lg:hidden" />
      </div>
    </nav>
  );
}
