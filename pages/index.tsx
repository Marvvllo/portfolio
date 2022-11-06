import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "../components/Buttons";
import WorkItem from "../components/WorkItem";
import photograph from "../public/images/photograph.jpg";
import AboutMeImage from "../public/images/about-me.png";
import GameDay from "../public/images/gameday.png";
import marvalo from "../public/images/marvalo.png";
import eleganter from "../public/images/eleganter.png";
import { work } from "../data/work";

const Home: NextPage = () => {
  return (
    <main className="text-white flex flex-col gap-24">
      <Hero />

      <AboutMe />

      <WorkSection />
    </main>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="isolate flex flex-col items-center">
      <div className="md:self-start relative text-3xl md:text-8xl -ml-1.5 -mb-half-text">
        <h2 className="heading ">
          Marvello<span className="inline md:hidden"> Nyahu</span>
        </h2>
        <h2 className="z-20 absolute top-0 right-0 heading text-transparent text-outlined">
          Marvello<span className="inline md:hidden"> Nyahu</span>
        </h2>
      </div>

      <div className="z-10 flex flex-col md:grid grid-cols-2 md:items-center">
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
            height={400}
            className="ml-auto rounded-md"
            src={photograph}
            alt="Photograph of Me"
          />
        </motion.div>
        <div className="flex flex-col items-center md:items-start gap-2 -mt-16 md:mt-0 mx-auto">
          <span className="text-center md:text-left font-semibold text-2xl">
            <h2 className="">Front End Developer</h2>
            <h2 className="">UI Designer</h2>
          </span>
          <PrimaryButton href="/work" arrow>
            See my works
          </PrimaryButton>
        </div>
      </div>

      <div className="relative hidden md:block ">
        <h2 className="heading text-8xl -mt-half-text">Nyahu</h2>
        <h2 className="z-20 absolute -top-half-text left-0 heading text-3xl md:text-8xl text-transparent text-outlined">
          Nyahu
        </h2>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center isolate ">
      <h3 className="heading -mb-half-text text-3xl md:text-5xl">
        About Me
      </h3>
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
          className="rounded-md brightness-75"
          src={AboutMeImage}
          alt="My Current Projects"
        />
      </motion.div>
    </section>
  );
};

const WorkSection = () => {
  return (
    <article className="flex flex-col gap-16 md:gap-32 pb-48">
      <div className="">
        <h2 className="heading text-3xl md:text-6xl">Work</h2>
      </div>
      {work.map((work) => (
        <WorkItem
          key={work.id}
          image={work.image}
          title={work.title}
          snippet={work.snippet}
        />
      ))}
    </article>
  );
};

export default Home;
