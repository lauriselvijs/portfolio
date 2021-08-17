import Link from "next/link";

const Project = ({ project }) => {
  return (
    <div className="card">
      <img src={project.frontmatter.cover_image} alt="" />
      <div className="project-date">Posted on {project.frontmatter.date}</div>
      <h3>{project.frontmatter.title}</h3>
      <p>{project.frontmatter.excerpt}</p>
      <Link href={`/portfolio/${project.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default Project;
