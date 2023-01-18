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
  categories,
  description,
  images,
  link,
}) => {
  return (
    <main className="flex flex-col gap-4 lg:px-16">
      {/* Back button */}
      <Link
        href="/work"
        className="flex flex-row justify-between items-center self-start  
          gap-2 rounded-md font-medium hover:opacity-80 transition-opacity"
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
        Back
      </Link>

      {/* Content */}

      <Image
        className="h-40 sm:h-auto w-full rounded-xl self-center object-cover"
        src={thumbnail}
        alt="Branding Image"
        width={860}
        height={640}
      />

      <div className="flex flex-col gap-2 my-8">
        <Link href={link} className="">
          <h1 className="flex flex-row gap-1 heading text-3xl md:text-4xl border-solid border-b-2 pb-1 border-white group">
            {title}
            {link !== "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 aspect-square -translate-y-1 group-hover:translate-x-2 transition-transform duration-300"
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

        <div className="lg:grid grid-cols-2">
          <div className="grid grid-cols-2 mt-8 md:self-center">
            <h2 className="heading text-xl">Category</h2>
            <ul className="text-base font-medium">
              {categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {images.map((image, index) => (
          <Image
            key={index}
            className="h-auto sm:h-auto w-full rounded-xl self-center object-cover"
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
