import ProfilePhoto from "../assets/Virgilio-Profile-Photo.webp";
import Card from "../Components/Card";
import Text from "../Data/Text.json";

export default function Presentation() {
  return (
    <div className="mt-10 flex flex-row container mx-auto gap-44 ">
      <div>
        <h1 className="text-6xl Title">Hello I'm</h1>
        <div className=" w-[389px] h-[389px] overflow-hidden rounded-[500px] my-10 photo-holder">
          <img className="h-full w-full  object-cover" src={ProfilePhoto}></img>
        </div>
        <h1 className="text-6xl text-end Title">Virgilio!</h1>
      </div>
      <div className="flex flex-row gap-10 ">
        <div>
          <h1 className="Card-Title text-6xl text-center pb-4">About Me</h1>
          <Card text={Text.db.aboutMe.slice(0, 300) + "..."} />
        </div>
        <div>
          <h1 className="Card-Title text-6xl text-center pb-4">Latest Work</h1>
          <Card text={Text.db.aboutMe.slice(0, 300) + "..."} />
        </div>
      </div>
    </div>
  );
}
