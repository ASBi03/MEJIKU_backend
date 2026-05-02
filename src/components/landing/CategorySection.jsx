"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Wave from "@/components/ui/Wave";
import { categories } from "@/data/categories";

export default function CategorySection() {
  const styles = [
    {
      bg: "bg-[#FFF1C8]",
      border: "border-[#FAB800]",
      title: "text-[#F66606]",
      button: "bg-[#F66606] hover:bg-[#ff7a1a]",
      icon: "🎲",
    },
    {
      bg: "bg-[#EAF7FF]",
      border: "border-[#009EFF]",
      title: "text-[#009EFF]",
      button: "bg-[#009EFF] hover:bg-[#1EAAFF]",
      icon: "📚",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAB80080] pt-3 pb-20 md:pt-10 md:pb-28">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle
            title="Pilih aktivitas yang sesuai untuk anak"
            description="Mulai dari edugame edukatif hingga beragam pilihan buku."
            align="center"
          />
        </motion.div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {categories.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  x: isLeft ? -70 : 70,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={`relative overflow-hidden rounded-[30px] border p-4 shadow-sm md:rounded-[36px] md:p-5 ${styles[index].bg} ${styles[index].border}`}
              >
                <div className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-sm">
                  {styles[index].icon}
                </div>

                <div className="h-40 overflow-hidden rounded-[24px] bg-white md:h-52">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3
                  className={`mt-5 font-heading text-[30px] font-bold leading-tight ${styles[index].title}`}
                >
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[500px] font-body text-[17px] leading-6 text-slate-600 md:text-base">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className={`mt-5 inline-flex h-10 items-center justify-center rounded-full px-5 font-body text-sm font-bold text-white transition hover:scale-[1.03] ${styles[index].button}`}
                >
                  {item.cta}
                </a>
              </motion.article>
            );
          })}
        </div>
      </Container>

      <Wave position="bottom" fill="#ffffff" />
    </section>
  );
}