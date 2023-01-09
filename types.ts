import { StaticImageData } from "next/image";

export interface work {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  body: string;
  link: String;
}

export interface skill {
  id: number;
  image: StaticImageData;
  name: string;
}
