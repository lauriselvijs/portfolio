import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Project from "../components/Project";
import { sortByDate } from "../utils";

export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from projects dir
  const files = fs.readdirSync(path.join("projects"));

  // Get slug and frontmatter form posts
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      projects: projects.sort(sortByDate),
    },
  };
}
