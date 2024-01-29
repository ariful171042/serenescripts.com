"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navitems = [
  {
    id: 1,
    name: "Features",
    path: "/features",
  },
  {
    id: 2,
    name: "About Us",
    path: "/aboutus",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contactus",
  },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="h-16 w-full flex justify-center border-b shadow-xl">
      <nav className="wrapper h-full flex justify-between items-center">
        <div className="logo">
          <Link href={"/"} className="text-xl font-bold">
            Home
          </Link>
        </div>
        <ul className="flex  gap-5 items-center">
          {navitems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`text-lg font-bold ${
                  pathname === item.path ? "font-[800] text-blue-500" : ""
                }`}>
                {item.name}
              </Link>
            </li>
          ))}
          <Link
            href={"/sign-in"}
            className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold tracking-wider">
            Sign In
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
