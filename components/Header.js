
import React, { useEffect, useState } from "react";

import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import ResponsiveHeader from "./ResponsiveHeader";
import { useRouter } from "next/router";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Sevices",
    link: "services",
  },

  {
    name: "About",
    link: "about",
  },
  {
    name: "Blogs",
    link: "blogs",
  },
   
  {
    name: "Contact us",
    link: "contact",
  },

];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "hrefp Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Header = ( ) => {
 
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

 
  const hrefggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
        <div className="  bg-primary   text-black ">
          <div className="container py-[2px]  ">
            <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-between  font-bold">
              <p className="text-sm text-center  ">Email : info@berown.com</p>
              <p className="text-sm  text-center">Mobile No. : +91 70656475252</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#a7a7a9]  " onClick={hrefggleMenu}>
          <div className="container py-3 sm:py-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 py-2 font-bold text-2xl">
                <Link href={"/"}  >
                  <img src={"/Logo.png"} alt="" className="h-12 max-w-full rounded-lg" />
                </Link>
                {/* <span>TCJ hrefurism</span> */}
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center gap-6 animatedRight ">
                  <li className="py-4">
                    <Link href="/" className={`text-decoration-none ${router.pathname === "/" ? "text-primary font-bold" : ""}`} >
                      Home
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link href="services" className={`text-decoration-none ${router.pathname === "/services" ? "text-primary font-bold" : ""}`} >
                      Services
                    </Link>
                  </li>
                  {/* <li className="py-4">
                    <Link href="/insights" className={`text-decoration-none ${router.pathname==="/insights" ? "text-primary" : "" }`} >
                      Insights
                    </Link>
                  </li> */}
                  <li className="py-4">
                    <Link href="blogs" className={`text-decoration-none ${router.pathname === "/blogs" ? "text-primary font-bold" : ""}`} >
                      Blogs
                    </Link>
                  </li>

                  <li className="py-4">
                    <Link href="about" className={`text-decoration-none ${router.pathname === "/about" ? "text-primary font-bold" : ""}`} >
                      About
                    </Link>
                  </li>
                  
                  {/* <li className="group relative cursor-pointer">
                    <Link
                      href="/"
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      Quick Links{" "}
                      <span>
                        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                      </span>
                    </Link>
                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                      <ul className="space-y-3">
                        {DropdownLinks.map((data) => (
                          <li key={data.name}>
                            <Link
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li> */}
                </ul>
              </div>
              <div className="flex items-center gap-4">
                <Link href={"contact"} className="md:block hidden ">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-black font-bold px-3 py-1 rounded-full"

                  >
                    Contact us
                  </button>
                </Link>
                {/* Mobile Hamburger icon */}
                <div className="md:hidden block">
                  {showMenu ? (
                    <HiMenuAlt1
                      onClick={hrefggleMenu}
                      className=" cursor-pointer transition-all"
                      size={30}
                    />
                  ) : (
                    <HiMenuAlt3
                      onClick={hrefggleMenu}
                      className="cursor-pointer transition-all"
                      size={30}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResponsiveHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Header;
