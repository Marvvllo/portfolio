import { StaticImageData } from "next/image";
import gamedayBrand from "../public/images/gameday-brand.png";
import marvaloBrand from "../public/images/marvalo-brand.png";
import eleganterBrand from "../public/images/eleganter-brand.png";
import fnsmBrand from "../public/images/fnsm-brand.png";
import nyahuBrand from "../public/images/nyahu-brand.png";
import { work } from "../types";
import { v4 as uuidv4 } from "uuid";

export const works: Array<work> = [
  {
    id: uuidv4(),
    thumbnail: "/images/nyahu-brand.png",
    title: "Nyahu",
    categories: ["Branding"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ea eum vel dignissimos quo eveniet obcaecati, et reiciendis impedit magnam dolorem numquam, deserunt illo sequi?",
    images: [],

    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: fnsmBrand,
    title: "Friendly Neigborhood",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: eleganterBrand,
    title: "Eleganter",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: marvaloBrand,
    title: "Marvalo",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: gamedayBrand,
    title: "GameDay",
    categories: ["Web Development", "Design"],
    description: "Description",
    images: [],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
];
