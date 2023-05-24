import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SecondaryButton } from "../../components/Buttons";
import { works } from "../../data/works";
import { work } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = works.map((work) => {
    return {
      params: { project: work.title },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = (context) => {
  const projectTitle = context.params!.project;
  const work = works.find((work) => {
    return work.title === projectTitle;
  });
  return {
    // Passed to the page component as props
    props: {
      title: work?.title,
      thumbnail: work?.thumbnail,
      techs: work?.techs,
      categories: work?.categories,
      description: work?.description,
      images: work?.images,
      link: work?.link,
    },
  };
};

const Project: NextPage<work> = ({
  title,
  thumbnail,
  techs,
  categories,
  description,
  images,
  link,
}) => {
  return (
    <main className="flex flex-col gap-4 lg:px-40">
      {/* Back button */}
      <Link
        href="/work"
        target="_blank"
        className="group flex flex-row items-center justify-between  
          gap-1 self-start rounded-md font-medium transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 transition-transform duration-300 group-hover:-translate-x-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back
      </Link>

      {/* Content */}

      <Image
        className="h-40 w-full self-center rounded-xl border-2 border-solid border-white object-cover sm:h-auto"
        src={thumbnail}
        alt="Branding Image"
        width={860}
        height={640}
      />

      <div className="mt-4 flex flex-col gap-2">
        <Link href={link} target="_blank" className="">
          <h1 className="heading group flex flex-row gap-1 border-b-2 border-solid border-white pb-1 text-3xl md:text-4xl">
            {title}
            {link !== "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="aspect-square w-8 -translate-y-1 transition-transform duration-300 group-hover:translate-x-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            ) : null}
          </h1>
        </Link>

        <div className="grid-cols-3 place-items-center md:place-items-start lg:grid">
          {/* Tech Used */}
          <div className="flex flex-col self-center py-4">
            <h2 className="heading text-xl">Tech Used</h2>
            <ul className="text-base font-medium">
              {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Category */}
          <div className="flex flex-col border-t-2 border-white py-4 md:self-center md:border-0">
            <h2 className="heading text-xl">Category</h2>
            <ul className="text-base font-medium">
              {categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="border-t-2 border-white py-4 md:border-0">
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-16">
        {images.map((image, index) => (
          <Image
            key={index}
            className="h-auto w-full self-center rounded-xl border-2 border-solid border-white object-cover sm:h-auto"
            src={image}
            alt="Branding Image"
            width={860}
            height={640}
          />
        ))}
      </div>
    </main>
  );
};

export default Project;
