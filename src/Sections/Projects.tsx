import ProjectCard from "../Components/ProjectCard";
//@ts-ignore
import Slider from "react-slick";
import db from "../Data/db.json";
import { useState } from "react";

export default function Projects() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  switch (true) {
    case width < 770:
      settings.slidesToShow = 1;
      break;
    case width < 1280:
      settings.slidesToShow = 2;
      break;
    case width < 1536:
      settings.slidesToShow = 3;
      break;
    default:
      settings.slidesToShow = 4;
  }

  return (
    <div className=" mb-32">
      <h1 className="Segment-Title justify-end text-5xl">Projects</h1>

      <Slider {...settings} className="w-full grid  gap-10 mb-10 mt-10">
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
