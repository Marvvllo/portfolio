import { StaticImageData } from "next/image";
import gamedayImage from "../public/images/gameday.png";
import marvaloImage from "../public/images/marvalo.png";
import eleganterImage from "../public/images/eleganter.png";
import fnsmImage from "../public/images/fnsm.png";
import nyahuImage from "../public/images/nyahu-branding.png";
import { work } from "../types";
import { v4 as uuidv4 } from "uuid";

export const works: Array<work> = [
  {
    id: uuidv4(),
    thumbnail: nyahuImage,
    title: "Иyahu",
    category: ["Branding"],
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: fnsmImage,
    title: "Friendly Neigborhood",
    category: ["Web Development", "Design"],
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: eleganterImage,
    title: "Eleganter",
    category: ["Web Development", "Design", "Testing fr"],
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: marvaloImage,
    title: "Marvalo",
    category: ["Web Development", "Design"],
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: gamedayImage,
    title: "GameDay",
    category: ["Web Development", "Design"],
    body: "Description",
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
];
