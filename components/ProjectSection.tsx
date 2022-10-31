import Image, { StaticImageData } from "next/image";
import { HTMLProps } from "react";
import { motion, Variants } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const sectionVariants: Variants = {};

type Props = {
  image: StaticImageData;
  title: string;
  desc?: string;
};

const ProjectSection: React.FC<HTMLProps<HTMLDivElement> & Props> = ({
  children,
  className,
  image,
  title,
  desc,
}) => {
  return (
    <section
      className={`flex flex-col items-start sm:grid grid-cols-project sm:gap-8 sm:items-center sm:content-start isolate ${className}`}
    >
      <motion.div
        initial={{
          y: "25vh",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="-z-10 "
      >
        <Image className="" src={image} alt="Project Image" />
      </motion.div>
      <div className="flex flex-col items-start">
        <h3 className="heading self-center text-2xl sm:text-5xl -mt-4 sm:mt-0 sm:-translate-x-[50%] sm:self-start">
          {title}
        </h3>

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
    </section>
  );
};

export default ProjectSection;
