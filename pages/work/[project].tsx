import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { works } from "../../data/works";
import { work } from "../../types";

interface Props {
  work: work;
}

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
    props: { work },
  };
};

const Project: NextPage<Props> = ({ work }) => {
  return <h1>{work.title}</h1>;
};

export default Project;
