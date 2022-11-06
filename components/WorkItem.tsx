import Image, { StaticImageData } from "next/image";
import { HTMLProps, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const itemVariants: Variants = {
  invisible: {
    y: "25vh",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

type Props = {
  image: StaticImageData;
  title: string;
  snippet: string;
};

const WorkItem: React.FC<HTMLProps<HTMLDivElement> & Props> = ({
  className,
  image,
  title,
  snippet,
}) => {
  return (
    <motion.section
      initial="invisible"
      whileInView="visible"
      variants={itemVariants}
      viewport={{ once: true }}
      className={`flex flex-col items-start md:grid grid-cols-work-item md:gap-8 md:items-center md:content-start isolate ${className}`}
    >
      <div className="-z-10">
        <Image
          className="rounded-md"
          src={image}
          alt="Project Image"
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="heading self-center text-2xl md:text-5xl -mt-half-text md:mt-0 md:-translate-x-[50%] md:self-start">
          {title}
        </h3>

        <p className="text-lg mt-1">{snippet}</p>

        <PrimaryButton
          className="my-2"
          href="https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859"
          arrow
        >
          Learn More
        </PrimaryButton>

        <SecondaryButton
          className="my-2"
          href="https://github.com/Marvvllo/marvalo"
          arrow
        >
          Source Code
        </SecondaryButton>
      </div>
    </motion.section>
  );
};

export default WorkItem;
