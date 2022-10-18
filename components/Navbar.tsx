import Link from "next/link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, Variants } from "framer-motion";

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
  return (
    <header className="sticky top-0 inset-x-0 z-50 flex flex-row justify-between items-center px-4 py-2 isolate">
      <Link href="/">
        <a className="inline-block z-10 font-semibold text-xl">
          Nyahu
        </a>
      </Link>
      <div className="z-10">
        <Hamburger
          color="#F3F4F6"
          toggled={isNavOpen}
          toggle={setIsNavOpen}
        />
      </div>

      <motion.ul
        layout
        className={`absolute inset-0 w-screen h-screen bg-black/75 backdrop-blur-sm
          flex flex-col items-center justify-center gap-16 text-2xl font-normal`}
        initial={true}
        animate={isNavOpen ? "open" : "closed"}
        variants={listVariants}
        style={{ pointerEvents: isNavOpen ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-16 py-4">Home</a>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-16 py-4">About</a>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-16 py-4">Work</a>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link href="/" passHref>
            <a className="px-16 py-4">Contact</a>
          </Link>
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default Navbar;
