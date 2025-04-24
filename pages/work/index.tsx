import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { works } from "../../data/works";

const Work = () => {
  const [selectedID, setSelectedID] = useState(works.at(0)?.id);

  const handleHover = (id: string) => {
    setSelectedID(id);
  };

  return (
    <main className="grid-cols-3 content-center items-center gap-8 md:mt-8 md:grid">
      {/* Image */}
      <div className="relative col-span-2 hidden h-full w-full justify-self-center md:block">
        {works.map((work) => (
          <motion.div
            key={work.id}
            className="absolute left-0 top-0 aspect-video"
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: work.id == selectedID ? 1 : 0.9,
              opacity: work.id == selectedID ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              className="rounded-xl border-2 border-solid border-white"
              style={{
                objectFit: "contain",
              }}
              src={work.thumbnail}
              alt={work.title}
              width={1440}
              height={640}
            />
          </motion.div>
        ))}
      </div>

      {/* Details */}
      <div className="h-full">
        <h2 className="heading border-b-2 border-solid border-white md:text-6xl">
          Work
        </h2>
        <ul className="scrollbar-hide flex flex-col gap-4 overflow-y-scroll p-4 ">
          {works.map((work) => (
            <li
              className="group rounded-md font-medium
          text-white ring-2 ring-white
          transition-colors duration-300 hover:bg-white hover:text-black"
              key={work.id}
              onMouseEnter={() => handleHover(work.id)}
            >
              <Link
                className="flex items-center justify-between p-4"
                href={`/work/${work.title}`}
              >
                <p className="font-semibold">{work.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Work;
