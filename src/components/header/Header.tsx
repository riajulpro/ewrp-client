"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbAlignJustified } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const pathname = usePathname();

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrolled(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links: { route: string; pathname: string }[] = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Courses",
      pathname: "/courses",
    },
    {
      route: "Vocabulary",
      pathname: "/vocabulary",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <>
      <header
        className={`${
          scrolled ? "bg-green-400" : ""
        } sticky top-0 z-50 duration-150 ${
          pathname === "/" ? "text-white" : "bg-green-100 text-slate-800"
        }`}
      >
        <div
          className={`w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex justify-between items-center duration-150 ${
            scrolled ? "p-1" : "p-2"
          }`}
        >
          <div className="flex items-center gap-2">
            <button onClick={() => setMenu(!menu)} className="block md:hidden">
              <TbAlignJustified />
            </button>
            <span className="mt-2">
              <Image src={logo} alt="logo" height={50} />
            </span>
          </div>
          <div className="hidden md:flex flex-row justify-center items-center gap-10 uppercase text-sm">
            {links.map((link) => (
              <Link
                className={`${pathname === link?.pathname && "font-extrabold"}`}
                key={link?.route}
                href={link?.pathname}
              >
                {link?.route}
              </Link>
            ))}
          </div>
          <div>Login</div>
        </div>
      </header>
      <div
        className={`fixed z-50 top-0 ${
          menu ? "left-0" : "-left-full"
        } bottom-0 w-[80vw] bg-slate-900 duration-500`}
      >
        <button
          onClick={() => setMenu(false)}
          className="absolute right-3 top-3"
        >
          <MdCancel className="text-white text-lg" />
        </button>
        Menu
      </div>
    </>
  );
};

export default Header;
