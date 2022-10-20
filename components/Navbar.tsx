import Link from "next/link";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 40, transition: { duration: 0.2 } },
};

const listVariants: Variants = {
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMedium = useMediaQuery({
    query: "(min-width: 640px)",
  });

  useEffect(() => {
    setIsNavOpen(true);
  }, [isMedium]);

  return (
    <header className="sticky top-0 inset-x-0 z-50 flex flex-row justify-between items-center px-4 py-2 bg-gradient-to-b from-black to-transparent isolate">
      <Link href="/">
        <a className="inline-block z-10 font-semibold text-xl">
          Иyahu
        </a>
      </Link>
      <div className="z-10 sm:hidden">
        <Hamburger
          color="#F3F4F6"
          toggled={isNavOpen}
          toggle={setIsNavOpen}
        />
      </div>

      <motion.ul
        layout
        className={`absolute sm:static inset-0 w-screen h-screen sm:w-auto sm:h-auto bg-black/75 backdrop-blur-sm
          flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-0 text-2xl sm:text-base font-medium`}
        animate={isNavOpen ? "open" : "closed"}
        variants={listVariants}
        style={{ pointerEvents: isNavOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-8 py-4 ">Home</a>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-8 py-4">About</a>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-8 py-4">Work</a>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-8 py-4">Contact</a>
          </Link>
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default Navbar;
