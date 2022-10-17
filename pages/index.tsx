import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import photograph from "../public/images/photograph.jpg";
import placeholder from "../public/images/16_9_placeholder.png";
import marvalo from "../public/images/marvalo.png";

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
          <h1 className="heading text-4xl -mb-4 sm:m-0">
            Marvello Nyahu
          </h1>
        </div>
        <div className="flex flex-col">
          <Image
            className="-z-10"
            src={photograph}
            alt="Photograph of Me"
          />
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

      {/* Projects Section */}
      <section className="flex flex-col items-center my-8 px-4 isolate">
        <h3 className="heading -mb-4">Projects</h3>
        <Image
          width={720}
          height={360}
          className="-z-10 aspect-video"
          src={placeholder}
          alt="My Current Projects"
        />
        <svg
          className="w-8 h-8 mt-6"
          width="14"
          height="26"
          viewBox="0 0 14 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="wheel"
            d="M7 6V11"
            stroke="#F3F4F6"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 8.35391C13 4.29515 10.3115 1 7.00003 1C3.6885 1 1 4.29515 1 8.35391V17.6461C1 21.7049 3.6885 25 7.00003 25C10.3115 25 13 21.7049 13 17.6461V8.35391V8.35391Z"
            stroke="#F3F4F6"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </section>

      <ProjectSection image={marvalo}>
        <h3 className="heading self-center -mt-4">Marvalo</h3>

        <p className="text-base mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus repudiandae enim eius, esse nam fugit
          consequatur minima voluptatem repellendus debitis!
        </p>

        <PrimaryButton
          className="my-2"
          href="https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859"
          arrow
        >
          Visit Site
        </PrimaryButton>

        <SecondaryButton
          className="my-2"
          href="https://github.com/Marvvllo/marvalo"
          arrow
        >
          Source Code
        </SecondaryButton>
      </ProjectSection>
    </main>
  );
};

export default Home;
