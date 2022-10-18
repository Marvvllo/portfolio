import Image, { StaticImageData } from "next/image";
import { HTMLProps } from "react";
import { motion, Variants } from "framer-motion";

const sectionVariants: Variants = {};

type Props = {
  image: StaticImageData;
};

const ProjectSection: React.FC<HTMLProps<HTMLDivElement> & Props> = ({
  children,
  image,
  className,
}) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        x: -400,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      }}
      className={`flex flex-col items-start px-4 my-8 isolate ${className}`}
    >
      <Image
        width={1920}
        height={850}
        className="-z-10 aspect-video"
        src={image}
        alt="Project Image"
      />
      <div className="flex flex-col items-start">{children}</div>
    </motion.section>
  );
};

export default ProjectSection;
