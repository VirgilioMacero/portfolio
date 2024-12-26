import Logo from "../assets/Virgilio-logo.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function NavBar() {
  const [navButton, setNavButton] = useState(false);

  const changeState = () => {
    setNavButton(!navButton);
  };

  return (
    <>
      <div className="w-full shadow-lg flex flex-row justify-between">
        <img src={Logo} title="Logo" alt="Logo" className="p-4 pl-6"></img>
        <div>
          <ul className="flex flex-row gap-4  h-full items-center pr-6 max-[425px]:hidden">
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
              className="bg-[#58AAF4] p-2 rounded-md hover:bg-white hover:border-2 hover:border-[#58AAF4]"
            >
              <li className="text-white font-bold hover:text-[#58AAF4] Menu-Option">
                Let's Talk
              </li>
            </a>
          </ul>
          {navButton ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              onClick={changeState}
              stroke="currentColor"
              className="h-9 min-[425px]:hidden items-center mt-4 mr-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={changeState}
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-9 min-[425px]:hidden items-center mt-4 mr-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>

      <div>
        <AnimatePresence>
          {navButton ? (
            <motion.ul
              exit={{ opacity: 0 }}
              className="flex flex-col gap-4   items-start pl-6 min-[425px]:hidden pb-4 z-10 pt-4 bg-white border-t-2"
            >
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
                className="bg-[#58AAF4] p-2 rounded-md hover:bg-white self-end hover:border-2 mr-6 hover:border-[#58AAF4]"
              >
                <li className="text-white font-bold hover:text-[#58AAF4] Menu-Option">
                  Let's Talk
                </li>
              </a>
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
