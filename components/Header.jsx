import Link from "next/link";
import React from "react";
import { menus } from "../data/dummy";
const Header = () => {
  return (
    <div className="fixed h-10 flex items-center justify-center bg-white shadow-xl w-full">
      <ul className="flex flex-row gap-6 items-center justify-center">
        {menus.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

{
  /* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li> */
}
