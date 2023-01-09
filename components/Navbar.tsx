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
    text: "Work",
    href: "/work",
  },
  {
    id: 3,
    text: "Timeline",
    href: "/timeline",
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
    <header className="sticky top-0 inset-x-0 z-50 flex flex-row justify-between items-center py-2 px-8 md:px-12 bg-gradient-to-b from-black to-transparent isolate text-white">
      <Link href="/" className="block z-10 font-semibold text-xl">
        Иyahu
      </Link>
      <div className="z-10 md:hidden">
        <Hamburger
          color="#F3F4F6"
          toggled={isNavOpen}
          toggle={setIsNavOpen}
        />
      </div>

      <motion.ul
        layout
        className={`absolute md:static inset-0 w-screen h-screen md:w-auto md:h-auto backdrop-blur-sm md:backdrop-blur-none
          bg-black/50 md:bg-transparent flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 text-2xl md:text-base font-medium`}
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
