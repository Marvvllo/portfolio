import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import WorkItem from "../components/WorkItem";
import photograph from "../public/images/photograph.jpg";
import { works } from "../data/works";
import { skills } from "../data/skills";
import OutlinedText from "../components/OutlinedText";
import ReactTextTransition, { presets } from "react-text-transition";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <main className="h-full text-white flex flex-col items-center gap-16 md:gap-32 mb-4">
      <Hero />

      {/* <SelectedCases /> */}

      {/* <SkillsSection /> */}

      {/* <JourneySection /> */}
    </main>
  );
};

// Hero section at top of page
const Hero: React.FC = () => {
  const texts = ["Front End", "React", "Next JS", "Tailwind"];

  const [textIndex, setTextIndex] = useState(0);

  setTimeout(() => {
    if (textIndex == 3) {
      setTextIndex(0);
    } else {
      setTextIndex(textIndex + 1);
    }
  }, 2000);

  return (
    <section className="isolate flex flex-col items-center">
      <OutlinedText className="md:self-start text-4xl md:text-8xl -ml-1.5 mt-2 -mb-[1.25em] md:-mb-half-text text-center">
        <ReactTextTransition
          springConfig={presets.gentle}
          inline
          direction="down"
        >
          {texts[textIndex]}
        </ReactTextTransition>
        <span className="block md:hidden"> Developer</span>
      </OutlinedText>

      <div className="z-10 flex flex-col md:grid grid-cols-2 gap-2 md:gap-8 md:items-center">
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
            height={500}
            className="ml-auto rounded-md w-full md:w-96"
            src={photograph}
            alt="Image of Marvello Nyahu"
          />
        </motion.div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-center md:text-left my-2 md:mt-0">
            <h2 className="heading text-3xl md:text-4xl">
              Marvello Nyahu
            </h2>
            <p className="text-lg">
              An aspiring front-end developer designing and creating
              with <b>Figma</b>, <b>React</b>, <b>Next JS</b>, and{" "}
              <b>Tailwind CSS</b>
            </p>
          </span>

          <PrimaryButton
            className="w-full md:w-auto"
            href="/work"
            arrow
          >
            See my works
          </PrimaryButton>

          <SecondaryButton
            className="w-full md:w-auto mt-2"
            href="/timeline"
            arrow
          >
            Check out my journey
          </SecondaryButton>
        </div>
      </div>

      <OutlinedText className="hidden md:block text-4xl order-1 md:text-8xl -ml-1.5 -mt-half-text">
        Developer
      </OutlinedText>
    </section>
  );
};

// Preview section of my works
const SelectedCases = () => {
  return (
    <section id="work">
      <h2 className="heading md:text-6xl">Selected Cases</h2>
      <div className="flex flex-col gap-8 md:gap-16 my-4 md:my-8">
        {works.map((work) => (
          <WorkItem key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

// Skills/Tech used
const SkillsSection = () => {
  return (
    <section id="skills" className="w-full">
      <h2 className="heading md:text-6xl">Skills</h2>
      {/* Skills Grid */}
      <div className="flex flex-col md:grid grid-cols-3 auto-cols-auto gap-6 my-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-row gap-4 items-center ring-2 ring-white hover:bg-white hover:text-black hover:scale-105 transition-all group rounded-lg p-4"
          >
            <Image
              className="w-12 aspect-square group-hover:grayscale group-hover:invert"
              src={skill.image}
              alt={`Logo of ${skill.name}`}
            />
            <div className="">
              <p className="font-medium text-2xl md:text-xl cursor-default">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Journey/Timeline Preview
const JourneySection = () => {
  return (
    <section>
      <h2 className="heading md:text-7xl"></h2>
    </section>
  );
};

export default Home;
