import Image from "next/image";
import logo from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg"
import { log } from "console";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 ">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F6D6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md"></div>
            <Image src={logo} alt="Logo" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center" >
            <Link className="text-opacity-60 text-white hover:text-opacity-100 transition" href={"/"}>Home</Link>
            <Link className="text-opacity-60 text-white hover:text-opacity-100 transition" href={"features"}>Features</Link>
            <Link className="text-opacity-60 text-white hover:text-opacity-100 transition" href={"updates"}>Updates</Link>
            <Link className="text-opacity-60 text-white hover:text-opacity-100 transition" href={"contact"}>Contact</Link>
            <Link className="text-opacity-60 text-white hover:text-opacity-100 transition" href={"customers"}>Customer</Link>
            <button className="bg-white py-2 px-4 rounded-lg">Get For Free</button>
          </nav>
        </div>
      </div>

    </div>
  );
};
