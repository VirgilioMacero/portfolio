export default function Card({ text }: { text: string }) {
  return (
    <div className="w-[360px] h-[302px] flex flex-col border-2 shadow-lg rounded-2xl px-7 pt-10 pb-5 justify-between max-[375px]:w-[260px]">
      <p className="text-justify">{text}</p>
      <div className="w-full relative">
        <a
          href=""
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
      </div>
    </div>
  );
}
