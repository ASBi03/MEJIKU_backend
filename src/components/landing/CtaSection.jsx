"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export default function CtaSection() {
  return (
    <section className="bg-transparent pt-8 pb-10 md:pt-10 md:pb-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#009EFF] via-[#168EFF] to-[#F66606] px-6 py-8 text-white shadow-sm md:px-12 md:py-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute left-6 top-6 text-2xl text-[#FAB800]"
          >
            ✦
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute right-10 top-8 hidden text-xl text-[#FAB800] md:block"
          >
            ★
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute right-40 bottom-8 hidden text-2xl md:block"
          >
            🚀
          </motion.span>

          <div className="relative z-10 flex min-h-[155px] flex-col justify-center gap-5 pr-[105px] md:min-h-[150px] md:flex-row md:items-center md:justify-between md:gap-8 md:pr-[190px]">
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="max-w-[640px] font-heading text-[24px] font-bold leading-tight md:text-[36px]"
            >
              Siap membuat waktu belajar anak lebih seru dan bermakna?
            </motion.h2>

            <motion.a
              href="/register"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-[#F66606] px-6 font-heading text-sm font-medium text-white shadow-sm transition hover:bg-[#ff7a1a]"
            >
              Daftar Sekarang
              <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/25">
                ›
              </span>
            </motion.a>
          </div>

          <motion.img
            src="/images/mascots/cta-boy-mejiku.png"
            alt="Anak Mejiku"
            initial={{ opacity: 0, x: 70, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-[-6px] right-2 z-10 w-[120px] sm:w-[140px] md:bottom-[-14px] md:right-6 md:w-[175px] lg:w-[195px]"
          />
        </motion.div>
      </Container>
    </section>
  );
}