import ComputerImageUrl from "../assets/Computer-Image.svg";
import DEVImageUrl from "../assets/DEV-Image.svg";
import EngineImageUrl from "../assets/Engine-Image.svg";
export default function Services() {
  return (
    <div className="my-32">
      <h1 className=" Segment-Title justify-end text-5xl">Services</h1>
      <div className="grid grid-cols-4 gap-10 mt-10 max-[1537px]:grid-cols-3 max-[1024px]:grid-cols-1">
        <div className="flex flex-col items-center">
          <img src={EngineImageUrl} className="" alt="Network Managment" />
          <h2 className="text-4xl Title mt-2">Network Managment</h2>
        </div>{" "}
        <div className="flex flex-col items-center">
          <img src={ComputerImageUrl} alt="IT Technician" />
          <h2 className="text-4xl Title mt-2">IT Technician</h2>
        </div>{" "}
        <div className="flex flex-col items-center">
          <img src={DEVImageUrl} alt="Developer" />
          <h2 className="text-4xl Title mt-2">Software Developer</h2>
        </div>{" "}
        <div className="flex flex-col items-center">
          <p className="justify-center text-justify p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea
            dolores exercitationem dignissimos? Incidunt illum aliquid qui
            consequuntur, aperiam ratione ducimus expedita earum deleniti in
            inventore pariatur laboriosam repellat voluptates!
          </p>
          <a
            href="#LetsTalk"
            className="bg-[#58AAF4] p-2 rounded-md hover:bg-white hover:border-2 hover:border-[#58AAF4] self-start mt-2"
          >
            <div className="text-white font-bold hover:text-[#58AAF4] Menu-Option">
              Let's Talk
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
