import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import ProjectSection from "../components/ProjectSection";
import photograph from "../public/images/photograph.jpg";
import GameDay from "../public/images/gameday.png";
import AboutMeImage from "../public/images/about-me.png";
import marvalo from "../public/images/marvalo.png";
import eleganter from "../public/images/eleganter.png";

const Home: NextPage = () => {
  return (
    <main className="text-white flex flex-col gap-16">
      <Head>
        <title>Marvello Nyahu</title>
      </Head>

      <Hero />

      <AboutMe />

      {/* Scroll Wheel */}
      <svg
        className="block w-8 h-8 md:w-12 md:h-12 my-auto self-center"
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

      <article className="flex flex-col gap-16 md:gap-32">
        <div className="">
          <h1 className="heading text-4xl md:text-6xl -mb-4 md:-mb-6">
            Projects
          </h1>
        </div>
        <ProjectSection image={marvalo} title="Marvalo" />
        <ProjectSection image={eleganter} title="Eleganter" />
        <ProjectSection image={GameDay} title="GameDay" />
      </article>
    </main>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="isolate">
      <div className="">
        <h1 className="heading text-4xl md:text-6xl -mb-4 md:-mb-6">
          Marvello Nyahu
        </h1>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 md:gap-8 md:items-center md:content-start">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            zIndex: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay: 0.25,
            },
          }}
        >
          <Image
            className=""
            src={photograph}
            alt="Photograph of Me"
          />
        </motion.div>
        <div className="flex flex-col items-center md:items-start gap-2 -mt-16">
          <span className="text-center md:text-left font-semibold text-2xl">
            <h2 className="">Front End Developer</h2>
            <h2 className="">UI Designer</h2>
          </span>
          <PrimaryButton href="/contact" arrow>
            Contact Me
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center isolate">
      <h3 className="heading -mb-4 md:text-5xl">About Me</h3>
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
          zIndex: -10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{ once: true }}
        className="-z-10"
      >
        <Image
          width={500}
          height={500}
          className="  brightness-75"
          src={AboutMeImage}
          alt="My Current Projects"
        />
      </motion.div>
    </section>
  );
};

export default Home;
