import Container from "@/components/layout/Container";
import ProductCard from "@/components/ui/ProductCard";
import { recommendations } from "@/data/recommendations";

export default function RecommendationSection() {
  return (
    <section id="produk" className="bg-transparent pt-5 pb-7 md:pt-6 md:pb-9">
      <Container>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="font-heading text-[28px] font-bold leading-tight text-[#173B75] md:text-[28px]">
            Produk lain yang mungkin kamu suka
          </h2>

          <a
            href="#produk"
            className="secondary-button hidden h-9 px-5 py-0 text-xs md:inline-flex"
          >
            Lihat Semua
          </a>
        </div>
      </Container>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <Container>
          <div className="flex w-max gap-4 pb-3 pr-4 lg:grid lg:w-full lg:grid-cols-3 lg:gap-5 lg:pr-0">
            {recommendations.map((item, index) => (
              <div
                key={item.id}
                className="w-[260px] flex-shrink-0 sm:w-[280px] lg:w-auto"
              >
                <ProductCard {...item} colorIndex={index} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}