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
    <main className="flex flex-col gap-4 lg:px-32">
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
        className="h-40 sm:h-auto rounded-md self-center object-cover"
        src={thumbnail}
        alt="Branding Image"
        width={860}
        height={640}
      />

      <div className="flex flex-col lg:grid grid-cols-2  gap-2 mt-2">
        <div className="space-y-2">
          <h1 className="heading text-3xl md:text-4xl">{title}</h1>
          <ul className="text-lg font-medium">
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <p>{description}</p>
      </div>

      <div className="">
        {images.map((image, index) => (
          <Image
            key={index}
            className="rounded-md"
            src={image}
            alt="Branding Image"
            width={720}
            height={360}
          />
        ))}
      </div>
    </main>
  );
};

export default Project;
