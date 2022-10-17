import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="flex flex-row justify-between items-center px-4 py-2">
      <Link href="/">
        <a className="inline-block font-semibold text-xl">Nyahu</a>
      </Link>
      <button onClick={() => setIsNavOpen(!isNavOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
