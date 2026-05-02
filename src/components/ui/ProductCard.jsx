export default function ProductCard({
  title,
  description,
  tag,
  priceLabel,
  image,
  colorIndex = 0,
}) {
  const styles = [
    {
      card: "bg-[#FFF8DA]",
      imageBg: "bg-white",
    },
    {
      card: "bg-[#FFF1E8]",
      imageBg: "bg-white",
    },
    {
      card: "bg-[#EAF7FF]",
      imageBg: "bg-white",
    },
  ];

  const current = styles[colorIndex % styles.length];

  return (
    <article
      className={`flex h-full w-full flex-col rounded-[24px] border border-transparent p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${current.card}`}
    >
      <div className={`h-[140px] overflow-hidden rounded-[18px] md:h-[170px] ${current.imageBg}`}>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-white px-3 py-1 font-heading text-[11px] font-medium text-[#F66606]">
          {tag}
        </span>

        <span className="font-heading text-[14px] font-semibold text-[#009EFF]">
          {priceLabel}
        </span>
      </div>

      <h3 className="mt-3 font-heading text-[20px] font-bold leading-[22px] text-black">
        {title}
      </h3>

      <p className="mt-4 max-w-[500px] min-h-[58px] font-body text-[15px] leading-5 text-slate-600">
        {description}
      </p>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-3">
        <button className="h-10 rounded-full bg-[#F66606] px-5 font-heading text-[13px] font-medium text-white transition hover:bg-[#ff7a1a]">
          Lihat Detail
        </button>

        <button className="h-10 rounded-full secondary-button px-5 font-heading text-black text-[13px] font-bold transition ">
          Coba
        </button>
      </div>
    </article>
  );
}