import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import photograph from "../public/images/photograph.jpg";

const Home: NextPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <main className="text-white">
      <Head>
        <title>Marvello Nyahu</title>
      </Head>

      <nav className="flex flex-row justify-between items-center px-4 py-2">
        <Link href="/">
          <a className="inline-block font-semibold text-lg">Nyahu</a>
        </Link>
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="isolate px-4">
        <div className="">
          <h1 className="text-4xl font-bold text-center -mb-4">
            Marvello Nyahu
          </h1>
        </div>
        <div className="flex flex-col">
          <Image className="-z-10" src={photograph} />
          <div className="flex flex-col items-center gap-2 -mt-16">
            <span className="text-center font-semibold text-2xl">
              <h2 className="">Front End Developer</h2>
              <h2 className="">UI Designer</h2>
            </span>
            <PrimaryButton href="/test" arrow>
              Contact Me
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
