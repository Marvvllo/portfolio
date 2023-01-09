import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { works } from "../../data/works";

const Work = () => {
  const [selectedID, setSelectedID] = useState(1);

  const handleHover = (id: number) => {
    setSelectedID(id);
  };

  return (
    <main className="">
      <div className="md:grid grid-cols-3 mt-auto gap-8">
        <div className="hidden md:block col-span-2 relative h-full">
          {works.map((work) => (
            <motion.div
              className="absolute left-0 top-0 aspect-video"
              animate={{
                y: work.id == selectedID ? 0 : 200,
                opacity: work.id == selectedID ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                className="rounded-md"
                src={work.image}
                alt={work.title}
              />
            </motion.div>
          ))}
        </div>

        <div className="">
          <h2 className="heading md:text-6xl border-solid border-white border-b-2 mt-24">
            Work
          </h2>
          <ul className="md:h-64 overflow-y-scroll scrollbar-hide">
            {works.map((work) => (
              <li onMouseEnter={() => handleHover(work.id)}>
                <Link
                  className="flex flex-row justify-between border-solid border-white border-b-2  p-4"
                  href={`/work/${work.title}`}
                >
                  <p>{work.title}</p>
                  <p>{work.category}</p>
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
