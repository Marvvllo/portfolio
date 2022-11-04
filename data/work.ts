import { StaticImageData } from "next/image";
import gamedayImage from "../public/images/gameday.png";
import marvaloImage from "../public/images/marvalo.png";
import eleganterImage from "../public/images/eleganter.png";

type project = {
  image: StaticImageData;
  title: string;
  snippet: string;
  body: string;
  primaryLink: String;
  secondaryLink?: String;
};

export const work: Array<project> = [
  {
    image: eleganterImage,
    title: "Eleganter",
    snippet:
      "Eleganter is a website made to ease the process of interior design",
    body: "Description",
    primaryLink:
      "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    image: marvaloImage,
    title: "Marvalo",
    snippet:
      "Marvalo was made to test the capabilities of Next JS' getStaticProps",
    body: "Description",
    primaryLink:
      "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    image: gamedayImage,
    title: "GameDay",
    snippet:
      "GameDay was made to test the capabilities of Next JS' getStaticProps",
    body: "Description",
    primaryLink:
      "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
];
