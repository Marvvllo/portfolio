import Link from "next/link";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion, Variants } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

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

const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Resume",
    href: "/resume",
  },
  {
    id: 3,
    text: "Work",
    href: "/work",
  },
  {
    id: 4,
    text: "Contact",
    href: "/contact",
  },
];

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const isMedium = useMediaQuery({
    query: "(min-width: 768px)",
  });

  useEffect(() => {
    if (isMedium) {
      setIsNavOpen(true);
    }
  }, [isMedium]);

  return (
    <header className="sticky inset-x-0 top-0 isolate z-50 flex flex-row items-center justify-between bg-gradient-to-b from-black to-transparent px-8 py-2 text-white md:px-12">
      <Link href="/" className="z-10 block text-xl font-semibold">
        Иyaivu
      </Link>
      <div className="z-10 md:hidden">
        <Hamburger color="#F3F4F6" toggled={isNavOpen} toggle={setIsNavOpen} />
      </div>

      <motion.ul
        layout
        className={`absolute inset-0 flex h-screen w-screen flex-col items-center justify-center gap-16
          bg-black/50 text-2xl font-medium backdrop-blur-sm md:static md:h-auto md:w-auto md:flex-row md:gap-12 md:bg-transparent md:text-base md:backdrop-blur-none`}
        animate={isNavOpen ? "open" : "closed"}
        variants={listVariants}
        style={{ pointerEvents: isNavOpen ? "auto" : "none" }}
      >
        {navLinks.map((nav) => (
          <motion.li variants={itemVariants} key={nav.id}>
            <Link
              href={nav.href}
              className={`nav__link block py-4 ${
                router.asPath === nav.href ? "active" : null
              }`}
            >
              {nav.text}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Navbar;
