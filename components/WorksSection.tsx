import Image from "next/image";
import Link from "next/link";
import { HTMLProps, useRef } from "react";
import { works } from "../data/works";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

const Carousel = () => {
  const ref = useRef<StackedCarousel>();

  return (
    <>
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Item}
                slideWidth={parentWidth > 800 ? 750 : parentWidth}
                carouselWidth={parentWidth}
                data={works}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor
              />
            );
          }}
        />
      </div>
      <div className="self-center hidden md:block mb-4">
        {/* Back Button */}
        <button
          className="border-2 border-white/50 border-r-0 rounded-l-md opacity-50 hover:opacity-100 transition-opacity px-1 py-1"
          onClick={() => ref.current?.goBack()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          className="border-2 border-white/50 border-l-0 rounded-r-md opacity-50 hover:opacity-100 transition-opacity px-1 py-1"
          onClick={() => ref.current?.goNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

const Item = (props: any) => {
  const { data, dataIndex } = props;
  const { image, title, primaryLink } = data[dataIndex];
  return (
    <Link href={primaryLink} draggable={false} className="">
      <Image
        className="rounded-md"
        src={image}
        alt="image"
        draggable={false}
      />
      <p className="heading text-left text-xl md:text-2xl">{title}</p>
    </Link>
  );
};

const WorksSection: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className="flex flex-col gap-8">
      <div className="">
        <h2 className="heading text-3xl md:text-6xl">Works</h2>
      </div>
      <div className="flex flex-col">
        <Carousel />
      </div>
    </section>
  );
};

export default WorksSection;
