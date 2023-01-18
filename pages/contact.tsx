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
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <main className="h-full text-white flex flex-col items-center gap-16 md:gap-32 mb-4">
      <ContactInfo />
    </main>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <section className="isolate flex flex-col items-center w-full">
      <OutlinedText className="md:self-start text-4xl md:text-8xl -ml-1.5 mt-2 -mb-[1.25em] md:-mb-half-text text-center">
        Need a<span className="block md:hidden"> Website?</span>
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
            className="ml-auto rounded-xl w-full md:w-96 brightness-75"
            src="/images/about-me.png"
            width={500}
            height={500}
            alt="Image of Marvello Nyahu"
          />
        </motion.div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-center md:text-left my-2 md:mt-0">
            <h2 className="heading text-3xl md:text-4xl">
              Contact Me
            </h2>
            <p className="text-lg md:text-xl">
              Let&apos;s get in touch and start up your website!
            </p>
          </span>

          <Link
            href="https://www.instagram.com/marv.11/"
            className="w-full md:w-auto mt-2 flex flex-row justify-between items-center gap-2
         bg-white rounded-md p-2
        font-medium text-black ring-2 ring-white group
        hover:bg-transparent hover:text-white transition-colors duration-300"
            target={"_blank"}
          >
            <span className="flex flex-row gap-1">
              <svg
                fill="currentColor"
                width="200px"
                height="200px"
                viewBox="0 7 17.8 17.8"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 aspect-square"
              >
                <title>instagram</title>
                <path d="M14.48 11.28c0 0.48-0.4 0.84-0.84 0.84-0.48 0-0.84-0.4-0.84-0.84 0-0.48 0.4-0.84 0.84-0.84 0.44-0.040 0.84 0.36 0.84 0.84zM17.76 11.64v8.72c0 2.48-2.040 4.52-4.52 4.52h-8.72c-2.48 0-4.52-2.040-4.52-4.52v-8.72c0-2.48 2.040-4.52 4.52-4.52h8.72c2.52 0 4.52 2.040 4.52 4.52zM16.080 11.64c0-1.56-1.28-2.84-2.84-2.84h-8.72c-1.56 0-2.84 1.28-2.84 2.84v8.72c0 1.56 1.28 2.84 2.84 2.84h8.72c1.6 0 2.88-1.28 2.88-2.84l-0.040-8.72zM13.52 16c0-2.56-2.080-4.64-4.64-4.64s-4.64 2.080-4.64 4.64 2.080 4.64 4.64 4.64 4.64-2.080 4.64-4.64zM11.84 16c0 1.64-1.32 2.96-2.96 2.96s-2.96-1.32-2.96-2.96 1.32-2.96 2.96-2.96 2.96 1.32 2.96 2.96z" />
              </svg>
              <p>@marv.11</p>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 aspect-square group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      <OutlinedText className="hidden md:block text-4xl order-1 md:text-8xl -ml-1.5 -mt-half-text">
        Website?
      </OutlinedText>
    </section>
  );
};

export default Contact;
