import { StaticImageData } from "next/image";

export type work = {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  body: string;
  link: String;
};

export type skill = {
  id: number;
  image: StaticImageData;
  name: string;
};
