import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton } from "../components/Buttons";
import WorkItem from "../components/WorkItem";
import photograph from "../public/images/photograph.jpg";
import AboutMeImage from "../public/images/about-me.png";
import { work } from "../data/work";
import OutlinedText from "../components/OutlinedText";

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
      <OutlinedText className="md:self-start text-4xl md:text-8xl -ml-1.5">
        Marvello<span className="inline md:hidden"> Nyahu</span>
      </OutlinedText>

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
            height={500}
            className="ml-auto rounded-md w-full md:w-96"
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

      <OutlinedText
        className="hidden md:block text-4xl md:text-8xl -ml-1.5"
        shiftUp
      >
        Nyahu
      </OutlinedText>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="isolate relative md:flex flex-row items-center">
      <OutlinedText className="text-4xl md:text-8xl md:-mr-52">
        About
      </OutlinedText>

      <div className="md:grid grid-cols-2 items-center gap-8">
        <div className="md:justify-self-end">
          <Image
            height={500}
            className="rounded-md brightness-75"
            src={AboutMeImage}
            alt="My Current Projects"
          />
        </div>

        <div className="flex flex-col items-center md:items-start gap-2 md:mt-2">
          <div className="">
            <p className="max-w-[45ch] md:text-2xl indent-8 md:indent-0">
              A front end developer hailing from Borneo, Indonesia
              with a background in diversitiy and web development.
            </p>
          </div>
          <PrimaryButton href="/timeline" arrow className="">
            Catch up
          </PrimaryButton>
        </div>
      </div>
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
