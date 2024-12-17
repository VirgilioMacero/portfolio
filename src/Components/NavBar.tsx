import Logo from "../assets/Virgilio-logo.svg";

export default function NavBar() {
  return (
    <div className="w-full shadow-lg flex flex-row justify-between">
      <img src={Logo} title="Logo" alt="Logo" className="p-4 pl-6"></img>
      <div>
        <ul className="flex flex-row gap-4  h-full items-center pr-6">
          <a href="#AboutMe">
            <li className="Menu-Option">About Me</li>
          </a>
          <a href="#Services">
            <li className="Menu-Option">Services</li>
          </a>
          <a href="#Work">
            <li className="Menu-Option">Work</li>
          </a>
          <a
            href="#LetsTalk"
            className="bg-[#58AAF4] p-2 rounded-md hover:bg-white"
          >
            <li className="text-white font-bold hover:text-[#58AAF4] Menu-Option">
              Let's Talk
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
