import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import photograph from "../public/images/photograph.jpg";
import OutlinedText from "../components/OutlinedText";
import ReactTextTransition, { presets } from "react-text-transition";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <main className="mb-4 flex h-full flex-col items-center gap-16 text-white md:gap-32">
      <Hero />
    </main>
  );
};

// Hero section at top of page
const Hero: React.FC = () => {
  const texts = ["Front End", "React", "Next JS", "Tailwind"];
  // const alternateTexts = ["Minimal", "Stunning", "Beautiful", "Efficient"];

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
      <OutlinedText className="-ml-1.5 mt-2 -mb-[1.25em] text-center text-4xl md:-mb-half-text md:self-start md:text-8xl">
        <ReactTextTransition
          springConfig={presets.gentle}
          inline
          direction="down"
        >
          {texts[textIndex]}
        </ReactTextTransition>
        <span className="block md:hidden"> Developer</span>
      </OutlinedText>

      <div className="z-10 flex grid-cols-2 flex-col gap-2 md:grid md:items-center md:gap-8">
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
            className="ml-auto w-full rounded-xl md:w-96"
            src={photograph}
            alt="Image of Marvello Nyahu"
            loading="eager"
          />
        </motion.div>
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="my-2 text-center md:mt-0 md:text-left">
            <h2 className="heading text-3xl md:text-4xl">Marvello Nyahu</h2>
            <p className="my-2 md:my-0 md:text-lg">
              An aspiring developer and UI designer with a knack for{" "}
              <span className="font-display md:text-xl">beautiful</span> and{" "}
              <span className="font-display md:text-xl"> efficient</span>{" "}
              websites.
            </p>
          </span>

          <PrimaryButton className="w-full md:w-auto" href="/work" arrow>
            See my works
          </PrimaryButton>

          <SecondaryButton
            className="mt-2 w-full md:w-auto"
            href="/contact"
            arrow
          >
            Contact me
          </SecondaryButton>
        </div>
      </div>

      <OutlinedText className="order-1 -ml-1.5 -mt-half-text hidden text-4xl md:block md:text-8xl">
        Developer
      </OutlinedText>
    </section>
  );
};

export default Home;
