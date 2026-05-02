export default function Wave({ position = "bottom", fill = "#FAB80080" }) {
  const isTop = position === "top";

  return (
    <div
      className={`pointer-events-none absolute left-0 z-0 w-full overflow-hidden leading-none ${
        isTop ? "top-[-1px] rotate-180" : "bottom-[-1px]"
      }`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[55px] w-full md:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C240,130 480,0 720,64 C960,130 1200,0 1440,64 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}