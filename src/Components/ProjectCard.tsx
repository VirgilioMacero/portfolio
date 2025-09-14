import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  text,
  imageURL,
  linkToProject,
}: {
  text: string;
  imageURL?: string;
  linkToProject?: string;
}) {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className="w-[360px] h-[302px] flex flex-col border-2 shadow-lg rounded-2xl px-7 pt-7 pb-5 justify-between max-[375px]:w-[260px]">
      <img
        src={imageURL}
        alt={text}
        className="w-full h-[150px] object-fill border-2 rounded-lg mb-3"
      />
      {width > 375 ? (
        <p className="text-justify">{text.slice(0, 100)}</p>
      ) : (
        <p className="text-justify">{text.slice(0, 50)}...</p>
      )}

      <div className="w-full relative">
        {linkToProject?.includes("https") || linkToProject?.includes("http") ? (
          <a
            href={linkToProject}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row text-xl Card-Link justify-end text-[#100E8D]"
          >
            more{"  "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        ) : (
          <Link
            to={`/projects/${linkToProject}`}
            className="flex flex-row text-xl Card-Link justify-end text-[#100E8D]"
          >
            more{"  "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
