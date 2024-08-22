import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import OutlinedText from "../../components/OutlinedText";
import Link from "next/link";
import { useState } from "react";

const Contact: NextPage = () => {
  return (
    <main className="mb-4 flex h-full flex-col items-center gap-16 text-white md:gap-32">
      <ContactInfo />
    </main>
  );
};

const ContactInfo: React.FC = () => {
  const [email, setEmail] = useState("marvtfs@gmail.com");
  const copyToCLipboard = () => {
    navigator.clipboard.writeText("marvtfs@gmail.com");
    setEmail("Email copied to clipboard!");

    setTimeout(() => {
      setEmail("marvtfs@gmail.com");
    }, 2000);
  };

  return (
    <section className="isolate flex w-full flex-col items-center">
      <OutlinedText className="-ml-1.5 mt-2 -mb-[1.25em] text-center text-4xl md:-mb-half-text md:self-start md:text-8xl">
        Need a<span className="block md:hidden"> Website?</span>
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
            className="ml-auto w-full rounded-xl brightness-75 md:w-96"
            src="/images/photograph.jpg"
            width={500}
            height={500}
            alt="Image of Marvello Nyahu"
            loading="eager"
          />
        </motion.div>
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="my-2 text-center md:mt-0 md:text-left">
            <h2 className="heading text-3xl md:text-4xl">Contact Me</h2>
            <p className="text-lg md:text-xl">
              Let&apos;s get in touch and start up your website!
            </p>
          </span>

          {/* Email Button */}
          <button
            onClick={() => copyToCLipboard()}
            className="group mt-2 flex w-full flex-row items-center justify-between gap-2
         rounded-md bg-white p-2
        font-medium text-black ring-2 ring-white transition-colors
        duration-300 hover:bg-transparent hover:text-white md:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="aspect-square h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p>{email}</p>
          </button>

          {/* Instagram Button */}
          <Link
            href="https://www.instagram.com/nyaivu/"
            className="group mt-2 flex w-full flex-row items-center justify-between 
          gap-2 rounded-md p-2 font-medium text-white
          ring-2 ring-white transition-colors
          duration-300 hover:bg-white hover:text-black md:w-auto"
            target={"_blank"}
          >
            <svg
              fill="currentColor"
              width="200px"
              height="200px"
              viewBox="0 7 17.8 17.8"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="aspect-square h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
            >
              <title>instagram</title>
              <path d="M14.48 11.28c0 0.48-0.4 0.84-0.84 0.84-0.48 0-0.84-0.4-0.84-0.84 0-0.48 0.4-0.84 0.84-0.84 0.44-0.040 0.84 0.36 0.84 0.84zM17.76 11.64v8.72c0 2.48-2.040 4.52-4.52 4.52h-8.72c-2.48 0-4.52-2.040-4.52-4.52v-8.72c0-2.48 2.040-4.52 4.52-4.52h8.72c2.52 0 4.52 2.040 4.52 4.52zM16.080 11.64c0-1.56-1.28-2.84-2.84-2.84h-8.72c-1.56 0-2.84 1.28-2.84 2.84v8.72c0 1.56 1.28 2.84 2.84 2.84h8.72c1.6 0 2.88-1.28 2.88-2.84l-0.040-8.72zM13.52 16c0-2.56-2.080-4.64-4.64-4.64s-4.64 2.080-4.64 4.64 2.080 4.64 4.64 4.64 4.64-2.080 4.64-4.64zM11.84 16c0 1.64-1.32 2.96-2.96 2.96s-2.96-1.32-2.96-2.96 1.32-2.96 2.96-2.96 2.96 1.32 2.96 2.96z" />
            </svg>
            <p>@nyaivu</p>
          </Link>

          {/* Github Button */}
          <Link
            href="https://github.com/Marvvllo"
            className="group mt-2 flex w-full flex-row items-center justify-between 
          gap-2 rounded-md p-2 font-medium text-white
          ring-2 ring-white transition-colors
          duration-300 hover:bg-white hover:text-black md:w-auto"
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="aspect-square h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black"
            >
              <path
                fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <p>Marvvllo</p>
          </Link>
        </div>
      </div>

      <OutlinedText className="order-1 -ml-1.5 -mt-half-text hidden text-4xl md:block md:text-8xl">
        Website?
      </OutlinedText>
    </section>
  );
};

export default Contact;
