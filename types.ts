import { StaticImageData } from "next/image";

export type work = {
  id: string;
  thumbnail: StaticImageData;
  title: string;
  category: string[];
  body: string;
  link: String;
};

export type skill = {
  id: number;
  image: StaticImageData;
  name: string;
};
