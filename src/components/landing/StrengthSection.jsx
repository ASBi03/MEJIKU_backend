"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { strengths } from "@/data/strengths";

export default function StrengthSection() {
  const cards = [
    {
      bg: "bg-[#FFF1C8]",
      border: "border-[#FAB800]",
    },
    {
      bg: "bg-[#EAF7FF]",
      border: "border-[#009EFF]",
    },
    {
      bg: "bg-[#FFE4EC]",
      border: "border-[#F66606]",
    },
    {
      bg: "bg-[#E6FFF4]",
      border: "border-[#009EFF]",
    },
  ];

  return (
    <section
      id="kelebihan"
      className="bg-[#FAB80080] pt-3 pb-7 md:pt-4 md:pb-10"
    >
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {strengths.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  x: isLeft ? -60 : 60,
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
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className={`flex items-center gap-3 rounded-[20px] border p-3 shadow-sm md:flex-col md:p-4 md:text-center ${cards[i].bg} ${cards[i].border}`}
              >
                <div className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white md:h-[82px] md:w-[82px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[70px] w-[70px] object-contain md:h-[92px] md:w-[92px]"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-heading text-[15px] font-bold leading-[17px] text-[#173B75] md:text-[15px] md:leading-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-1 font-body text-[13px] leading-[16px] text-slate-600 md:text-[12px] md:leading-[18px]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}