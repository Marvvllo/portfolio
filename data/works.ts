import { StaticImageData } from "next/image";
import { work } from "../types";
import { v4 as uuidv4 } from "uuid";

export const works: Array<work> = [
  {
    id: uuidv4(),
    thumbnail: "/images/nyahu/brand.png",
    title: "Nyahu",
    techs: ["Figma", "TypeScript", "Next JS", "Tailwind CSS"],
    categories: ["UI/UX Design", "Web Development"],
    description:
      "Nyahu is my last name, so I knew i wanted to implement it in my own way. The goal of this project is to make a memorable and lasting impression that includes my name and showing what I'm capable of in a to-the-point portfolio site.",
    images: [
      "/images/nyahu/screenshot-1.png",
      "/images/nyahu/screenshot-2.png",
      "/images/nyahu/screenshot-3.png",
    ],

    link: "https://nyahu.vercel.app/",
  },
  {
    id: uuidv4(),
    thumbnail: "/images/fnsm/brand.png",
    title: "Friendly Neigborhood",
    techs: ["Figma", "JavaScript", "React Native"],
    categories: ["UI/UX Design", "Mobile Development"],
    description:
      "Friendly Neigborhood is a React Native app based on the Spider-Man: Miles Morales game. The goal of FN is to utilize and improve my design and implementation workflow.",
    images: ["/images/fnsm/mockup-1.png", "/images/fnsm/mockup-2.png"],
    link: "",
  },
  {
    id: uuidv4(),
    thumbnail: "/images/eleganter/brand.png",
    title: "Eleganter",
    techs: ["Figma", "PHP", "CodeIgniter", "Tailwind CSS", "Android Studio"],
    categories: ["UI/UX Design", "Web Development", "Mobile Development"],
    description:
      "Eleganter is a more elegant solution for young adults to find furnitures in a simpler way. This project is made as a school project to simplify the process of finding modern and elegant furnitures for young adults.",
    images: [
      "/images/eleganter/screenshot-1.png",
      "/images/eleganter/screenshot-2.png",
      "/images/eleganter/screenshot-3.png",
    ],
    link: "",
  },
  {
    id: uuidv4(),
    thumbnail: "/images/marvalo/brand.png",
    title: "Marvalo",
    techs: ["Figma", "JavaScript", "Next JS"],
    categories: ["UI/UX Design", "Web Development"],
    description:
      "Marvalo is a personal project made with valorant-api.com and Next JS' getStaticProps functions. The goal of this project is to take inspiration based on Discord's UI and a utilizing a REST API.",
    images: [
      "/images/marvalo/screenshot-1.png",
      "/images/marvalo/screenshot-2.png",
      "/images/marvalo/screenshot-3.png",
    ],
    link: "https://marvalo.vercel.app/agents/707eab51-4836-f488-046a-cda6bf494859",
  },
  {
    id: uuidv4(),
    thumbnail: "/images/gameday/brand.png",
    title: "GameDay",
    techs: ["Figma", "TypeScript", "Next JS"],
    categories: ["Web Development", "Design"],
    description:
      "GameDay is a ticket-buying website specializing in sports. The goal of this website is to introduce the idea of buying more affordable with less hassle tickets online.",
    images: [
      "/images/gameday/screenshot-1.png",
      "/images/gameday/screenshot-2.png",
      "/images/gameday/screenshot-3.png",
    ],
    link: "",
  },
];
