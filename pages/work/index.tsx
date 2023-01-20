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
    <main className="">
      <div className="md:grid grid-cols-3 md:mt-8 gap-8">
        {/* Image */}
        <div className="hidden md:block col-span-2 relative h-full">
          {works.map((work) => (
            <motion.div
              key={work.id}
              className="absolute left-0 top-0 aspect-video"
              animate={{
                scale: work.id == selectedID ? 1 : 0.9,
                opacity: work.id == selectedID ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                className="rounded-xl border-solid border-2 border-white"
                style={{
                  objectFit: "contain",
                }}
                src={work.thumbnail}
                alt={work.title}
                width={780}
                height={320}
              />
            </motion.div>
          ))}
        </div>

        {/* Details */}
        <div className="h-full">
          <h2 className="heading md:text-6xl border-solid border-white border-b-2">
            Work
          </h2>
          <ul className="flex flex-col gap-4 p-4 md:h-96 overflow-y-scroll scrollbar-hide ">
            {works.map((work) => (
              <li
                className="ring-2 ring-white rounded-md
          font-medium text-white group
          hover:bg-white hover:text-black transition-colors duration-300"
                key={work.id}
                onMouseEnter={() => handleHover(work.id)}
              >
                <Link
                  className="flex justify-between items-center p-4"
                  href={`/work/${work.title}`}
                >
                  <p className="font-semibold">{work.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Work;
