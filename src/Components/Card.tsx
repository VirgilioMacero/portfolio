export default function Card({ text }: { text: string }) {
  return (
    <div className="w-[360px] h-[302px] border-2 shadow-lg rounded-2xl px-7 py-10 ">
      <p className="text-justify">{text}</p>
      <div className="w-full relative">
        <a
          href=""
          className="flex flex-row justify-end text-xl Card-Link text-[#100E8D]"
        >
          more{"  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
