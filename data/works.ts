import { StaticImageData } from "next/image";
import gamedayImage from "../public/images/gameday.png";
import marvaloImage from "../public/images/marvalo.png";
import eleganterImage from "../public/images/eleganter.png";
import { work } from "../types";

export const works: Array<work> = [
  {
    id: 1,
    image: eleganterImage,
    title: "Eleganter",
    category: "Web Development",
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: 2,
    image: marvaloImage,
    title: "Marvalo",
    category: "Web Development",
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: 3,
    image: gamedayImage,
    title: "GameDay",
    category: "Web Development",
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
];
