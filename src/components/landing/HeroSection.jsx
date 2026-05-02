"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-28 md:pt-8 md:pb-36">
      <Container>
        <div className="grid grid-cols-1 items-start gap-1 md:min-h-[520px] md:grid-cols-2 md:items-center md:gap-10">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 flex justify-center md:justify-start"
          >
            <div className="relative flex h-[245px] w-full max-w-[330px] items-center justify-center sm:h-[280px] md:h-[500px] md:max-w-[560px]">
              
              {/* background blobs */}
              <div className="absolute h-[210px] w-[210px] rounded-full bg-[#EAF7FF] sm:h-[245px] sm:w-[245px] md:h-[430px] md:w-[430px]" />

              <div className="absolute left-4 top-[90px] h-12 w-24 rounded-full bg-[#EAF7FF] md:left-0 md:top-[190px] md:h-20 md:w-36" />
              <div className="absolute right-2 top-[86px] h-14 w-28 rounded-full bg-[#EAF7FF] md:right-0 md:top-[180px] md:h-24 md:w-40" />
              <div className="absolute right-10 bottom-10 h-12 w-24 rounded-full bg-[#EAF7FF] md:right-14 md:bottom-20 md:h-20 md:w-36" />

              {/* stars */}
              <span className="absolute left-5 top-5 text-xl text-[#FAB800] md:text-3xl">✦</span>
              <span className="absolute right-7 top-8 text-xl text-[#009EFF] md:text-3xl">✦</span>
              <span className="absolute bottom-8 left-8 text-lg text-[#F66606] md:text-2xl">✦</span>

              <Image
                src="/images/mascots/hero-mascot.png"
                alt="Maskot Mejiku"
                width={500}
                height={500}
                priority
                className="relative z-10 w-[230px] object-contain sm:w-[260px] md:w-[500px]"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="order-2 -mt-2 text-center md:mt-0 md:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF7FF] px-3 py-1.5 md:px-4 md:py-2">
              <span className="text-[#FAB800]">★</span>
              <span className="font-heading text-[10px] font-medium text-[#009EFF] md:text-xs">
                Aktivitas belajar yang lebih seru
              </span>
            </div>

            <h1 className="mx-auto mt-3 max-w-[350px] font-heading text-[36px] font-bold leading-[1.05] text-[#173B75] sm:text-[34px] md:mx-0 md:max-w-[600px] md:text-[56px]">
              Temukan beragam <span className="text-[#F66606]">Edugame</span>{" "}
              dan <span className="text-[#009EFF]">Buku</span> anak untuk{" "}
              <span className="text-[#009EFF]">belajar sambil bermain!</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[330px] font-body text-[15px] leading-5 text-slate-600 md:mx-0 md:max-w-[480px] md:text-base md:leading-7">
              Mejiku membantu anak menemukan aktivitas edukatif yang seru,
              interaktif, dan lebih seimbang untuk didampingi orang tua.
            </p>

            <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
              <a
                href="#edugame"
                className="primary-button h-10 px-6 text-xs md:h-11 md:px-7 md:text-sm"
              >
                Mulai Jelajah
              </a>

              <a
                href="#produk"
                className="secondary-button h-10 px-6 text-xs md:h-11 md:px-7 md:text-sm"
              >
                Lihat Produk
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}