import { useState } from "react";
import ProfilePhoto from "../assets/Virgilio-Profile-Photo.webp";
import Card from "../Components/Card";
import Text from "../Data/Text.json";

export default function Presentation() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className="mt-10 flex flex-row max-[1024px]:flex-col container mx-auto gap-44 ">
      <div className="flex flex-col">
        <h1 className="text-6xl Title">Hello I'm</h1>
        <div className=" w-[389px] h-[389px] max-[1024px]:place-self-center  overflow-hidden rounded-[500px] max-[423px]:w-[270px] max-[423px]:h-[270px] my-10 photo-holder">
          <img className="h-full w-full  object-cover" src={ProfilePhoto}></img>
        </div>
        <h1 className="text-6xl text-end Title">Virgilio!</h1>
      </div>
      <div className="flex flex-row gap-10 max-[1415px]:flex-col ">
        <div className="flex flex-col justify-center self-center">
          <h1 className="Card-Title text-6xl text-center pb-4">About Me</h1>
          <Card
            text={
              width > 375
                ? Text.db.aboutMe.slice(0, 300) + "..."
                : Text.db.aboutMe.slice(0, 150) + "..."
            }
          />
        </div>
        <div className="flex flex-col justify-center self-center items-center">
          <h1 className="Card-Title text-6xl text-center pb-4">Latest Work</h1>
          <Card
            text={
              width > 375
                ? Text.db.aboutMe.slice(0, 300) + "..."
                : Text.db.aboutMe.slice(0, 150) + "..."
            }
          />
        </div>
      </div>
    </div>
  );
}
