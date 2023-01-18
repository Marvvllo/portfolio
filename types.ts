import { StaticImageData } from "next/image";

export type work = {
  id: string;
  thumbnail: string | StaticImageData;
  title: string;
  categories: string[];
  description: string;
  images: string[] | StaticImageData[];
  link: string;
};

export type skill = {
  id: number;
  image: StaticImageData;
  name: string;
};
