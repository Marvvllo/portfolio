import { StaticImageData } from "next/image";
import { title } from "process";
type project = {
  image: StaticImageData;
  title: string;
  body: string;
};

export const projects: Array<project> = [
  {
    image: require("/images/eleganter.png"),
    title: "eleganter",
    body: "Description",
  },
];
