import Image, { StaticImageData } from "next/image";
import { HTMLProps } from "react";

type Props = {
  image: StaticImageData;
};

const ProjectSection: React.FC<HTMLProps<HTMLDivElement> & Props> = ({
  children,
  image,
  className,
}) => {
  return (
    <section
      className={`flex flex-col items-start px-4 isolate ${className}`}
    >
      <Image
        width={720}
        height={360}
        className="-z-10 aspect-video"
        src={image}
      />
      <div className="flex flex-col items-start">{children}</div>
    </section>
  );
};

export default ProjectSection;
