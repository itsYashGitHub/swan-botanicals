import { NavbarMenu } from "./data";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import mainLogo from "../../assets/main-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-gray-400">
        <div className="container flex justify-between items-center">
          {/* Logo section */}
          <img className="h-13 w-12" src={mainLogo} alt="logo" />

          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-gray-800 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* icons section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-accentCharcoal hover:text-white rounded-full p-2 duration-200">
              <CiSearch className="text-2xl" />
            </button>
            <button className="text-2xl hover:bg-accentCharcoal hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCart className="text-2xl" />
            </button>
            <button className="hover:bg-accentCharcoal bg-secondarySage text-primary font-semibold hover:text-white rounded-md border-2 border-black px-5 py-1 duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile hamburger menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl hover:bg-accentCharcoal rounded-full p-1 cursor-pointer duration-200" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
