export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-[720px] ${alignment}`}>
      {eyebrow ? <span className="badge-soft">{eyebrow}</span> : null}

      <h2 className="mt-2 font-heading text-[28px] font-bold leading-tight text-[#173B75] md:text-[34px]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 font-body text-[16px] leading-6 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}