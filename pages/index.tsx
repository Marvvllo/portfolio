import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="text-primary">
      <Head>
        <title>Marvello Nyahu</title>
      </Head>
      <nav className="flex flex-row justify-between px-4 py-2">
        <Link href="/">
          <a className="inline-block font-semibold text-base">
            Nyahu
          </a>
        </Link>
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </nav>
    </main>
  );
};

export default Home;
