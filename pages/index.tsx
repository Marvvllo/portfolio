import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import Navbar from "../components/Navbar";
import photograph from "../public/images/photograph.jpg";

const Home: NextPage = () => {
  return (
    <main className="text-white">
      <Head>
        <title>Marvello Nyahu</title>
      </Head>

      <Navbar />

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
