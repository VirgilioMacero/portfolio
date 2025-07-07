import ProjectCard from "../Components/ProjectCard";
//@ts-ignore
import Slider from "react-slick";
import db from "../Data/db.json";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <h1 className="Segment-Title justify-end text-5xl">Projects</h1>

      <Slider {...settings} className="w-full grid  gap-10 mt-10 ">
        {db.projects.map((project, index) => (
          <ProjectCard
            key={index}
            text={project.text}
            imageURL={project.image}
            linkToProject={project.link}
          />
        ))}
      </Slider>
    </div>
  );
}
