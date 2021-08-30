import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";

const Project = ({ project }) => {
  return (
    <div className="card">
      <img src={project.frontmatter.cover_image} alt="" />
      <div className="project-date">Posted on {project.frontmatter.date}</div>
      <h3>{project.frontmatter.title}</h3>
      <p>{project.frontmatter.info}</p>
      <p>{project.frontmatter.tools}</p>
      <div className="container">
        <a
          className="github-btn"
          href={project.frontmatter.git_hub}
          rel="noreferrer"
          target="_blank"
        >
          GitHub <AiFillGithub />
        </a>
        <a
          className="btn"
          href={project.frontmatter.main_page}
          rel="noreferrer"
          target="_blank"
        >
          Home <AiFillHome />
        </a>
      </div>
      <Link href={`/portfolio/${project.slug}`}>
        <a className="btn">Show More</a>
      </Link>
    </div>
  );
};

export default Project;
