"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Wave from "../ui/Wave";

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAB80080] pt-12 pb-5 md:pt-20 md:pb-7">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}       
          whileInView={{ opacity: 1, y: 0 }}   
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle
            title="Alternatif aktivitas edukatif yang lebih sehat untuk anak"
            description="Mejiku menghadirkan edugame dan buku anak untuk membantu proses belajar menjadi lebih menyenangkan."
            align="center"
          />
        </motion.div>
      </Container>
      <Wave position="top" fill="#FFFFFF" />
    </section>
  );
}