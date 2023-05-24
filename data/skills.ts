import { skill } from "../types";
import tailwindLogo from "../public/images/skills/tailwind-logo.svg";
import HTMLLogo from "../public/images/skills/html-logo.svg";
import CSSLogo from "../public/images/skills/css-logo.svg";
import JSLogo from "../public/images/skills/js-logo.svg";
import NextLogo from "../public/images/skills/next-logo.svg";
import ReactLogo from "../public/images/skills/react-logo.svg";
import AndroidStudioLogo from "../public/images/skills/android-studio-logo.png";
export const skills: Array<skill> = [
  {
    id: 1,
    image: HTMLLogo,
    name: "HTML",
  },
  {
    id: 2,
    image: CSSLogo,
    name: "CSS",
  },
  {
    id: 3,
    image: JSLogo,
    name: "JavaScript",
  },
  {
    id: 4,
    image: tailwindLogo,
    name: "Tailwind CSS",
  },
  {
    id: 5,
    image: ReactLogo,
    name: "React & React Native",
  },
  {
    id: 6,
    image: NextLogo,
    name: "Next",
  },
  {
    id: 7,
    image: AndroidStudioLogo,
    name: "Android Studio",
  },
];
