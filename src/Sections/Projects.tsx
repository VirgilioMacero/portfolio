import ProjectCard from "../Components/ProjectCard";
import db from "../Data/db.json";

export default function Projects() {
  return (
    <div>
      <h1 className="Segment-Title justify-end text-5xl">Projects</h1>
      <div className="grid grid-cols-4 gap-10 mt-10 max-[1537px]:grid-cols-3 max-[1024px]:grid-cols-1">
        {db.projects.map((project, index) => (
          <ProjectCard
            key={index}
            text={project.text}
            imageURL={project.image}
            linkToProject={project.link}
          />
        ))}
      </div>
    </div>
  );
}
