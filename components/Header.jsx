import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed h-10 flex items-center justify-center bg-white shadow-xl w-full">
      <ul className="flex flex-row gap-6 items-center justify-center">
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export default Header;
