'use client';
import Container from "@/components/layout/Container";
import ProductCard from "@/components/ui/ProductCard";
import Wave from "@/components/ui/Wave";
import { edugames, books } from "@/data/products";


export default function FeaturedSection({ type }) {
  const isEdugame = type === "edugame";
  const data = isEdugame ? edugames : books;

  return (
    <section
    
      id={isEdugame ? "edugame" : "buku"}
      className="relative overflow-hidden bg-transparent pt-6 pb-16 md:pt-8 md:pb-20"
    >
      <Container>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="font-heading text-[30px] font-bold leading-tight text-[#173B75] md:text-[28px]">
            <span className={isEdugame ? "text-[#F66606]" : "text-[#009EFF]"}>
              {isEdugame ? "Produk edugame" : "Pilihan buku"}
            </span>{" "}
            {isEdugame
              ? "yang seru untuk dimainkan bersama!"
              : "anak yang seru dan bermanfaat!"}
          </h2>

          <a
            href="#produk"
            className="secondary-button hidden h-9 px-5 py-0 text-xs md:inline-flex"
          >
            Lihat Semua
          </a>
        </div>
      </Container>

      <div className="relative z-10 w-full overflow-x-auto scrollbar-hide">
        <Container>
          <div className="flex w-max gap-4 pb-3 pr-4 md:grid md:w-full md:grid-cols-3 md:gap-5 md:pr-0">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="w-[260px] flex-shrink-0 sm:w-[280px] md:w-auto"
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