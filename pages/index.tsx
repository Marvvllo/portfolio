import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/Buttons";
import photograph from "../public/images/photograph.jpg";
import OutlinedText from "../components/OutlinedText";
import ReactTextTransition, { presets } from "react-text-transition";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <main className="h-full text-white flex flex-col items-center gap-16 md:gap-32 mb-4">
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
            className="ml-auto rounded-xl w-full md:w-96"
            src={photograph}
            alt="Image of Marvello Nyahu"
          />
        </motion.div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-center md:text-left my-2 md:mt-0">
            <h2 className="heading text-3xl md:text-4xl">
              Marvello Nyahu
            </h2>
            <p className="md:text-xl my-2 md:my-0">
              An aspiring developer and UI designer with a knack for{" "}
              <span className="font-display md:text-2xl">
                beautiful
              </span>{" "}
              and{" "}
              <span className="font-display md:text-2xl">
                {" "}
                efficient
              </span>{" "}
              websites for startups with{" "}
              <span className="font-display md:text-2xl">
                {" "}
                taste
              </span>{" "}
              .
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
            href="/contact"
            arrow
          >
            Contact me
          </SecondaryButton>
        </div>
      </div>

      <OutlinedText className="hidden md:block text-4xl order-1 md:text-8xl -ml-1.5 -mt-half-text">
        Developer
      </OutlinedText>
    </section>
  );
};

export default Home;
