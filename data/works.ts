import { StaticImageData } from "next/image";
import gamedayBranding from "../public/images/gameday.png";
import marvaloBranding from "../public/images/marvalo.png";
import eleganterBranding from "../public/images/eleganter.png";
import fnsmBranding from "../public/images/fnsm.png";
import nyahuBranding from "../public/images/nyahu-branding.png";
import { work } from "../types";
import { v4 as uuidv4 } from "uuid";

export const works: Array<work> = [
  {
    id: uuidv4(),
    thumbnail: "/images/nyahu-branding.png",
    title: "Nyahu",
    categories: ["Branding"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ea eum vel dignissimos quo eveniet obcaecati, et reiciendis impedit magnam dolorem numquam, deserunt illo sequi?",
    images: [],

    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: fnsmBranding,
    title: "Friendly Neigborhood",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: eleganterBranding,
    title: "Eleganter",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: marvaloBranding,
    title: "Marvalo",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: gamedayBranding,
    title: "GameDay",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
];
