import { CheckBadgeIcon, CircleStackIcon, HomeIcon, BoltIcon, MagnifyingGlassIcon, UserIcon, } from "@heroicons/react/24/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";


function Header() {
  return (
    <header className="flex flex-col items-center justify-between md:flex-row m-8 h-auto">
      <div className="flex flex-grow justify-evenly items-center max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CircleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
        <h1 className="text-2xl sm:whitespace-nowrap cursor-pointer font-extrabold tracking-widest mr-0 sm:mr-10">BINGE ME!</h1>
        {/* <Image className="object-contain mr-0 sm:mr-10" src="https://i.ibb.co/3NpXdwR/video-player.png" alt="movie-image" width={50} height={70} /> */}
    </header>
  );
}

export default Header;

