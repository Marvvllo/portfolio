import { StaticImageData } from "next/image";
import gamedayImage from "../public/images/gameday.png";
import marvaloImage from "../public/images/marvalo.png";
import eleganterImage from "../public/images/eleganter.png";

type work = {
  id: number;
  image: StaticImageData;
  title: string;
  snippet: string;
  body: string;
  primaryLink: String;
  secondaryLink?: string;
};

export const works: Array<work> = [
  {
    id: 1,
    image: eleganterImage,
    title: "Eleganter",
    snippet:
      "Eleganter is a website made to ease the process of interior design",
    body: "Description",
    primaryLink:
      "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: 2,
    image: marvaloImage,
    title: "Marvalo",
    snippet:
      "Marvalo was made to test the capabilities of Next JS' getStaticProps",
    body: "Description",
    primaryLink:
      "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: 3,
    image: gamedayImage,
    title: "GameDay",
    snippet:
      "GameDay was made to test the capabilities of Next JS' getStaticProps",
    body: "Description",
    primaryLink:
      "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
];
