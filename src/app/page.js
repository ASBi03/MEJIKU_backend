'use client'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import StrengthSection from "@/components/landing/StrengthSection";
import CategorySection from "@/components/landing/CategorySection";
import FeaturedSection from "@/components/landing/FeaturedSection";
import RecommendationSection from "@/components/landing/RecommendationSection";
import SubscriptionSection from "@/components/landing/SubscriptionSection";
import CtaSection from "@/components/landing/CtaSection";
import { use } from "react";



function FallingLeaves() {
  const leaves = [
    { id: 1, left: 8, delay: "0s", duration: "18s", size: 12, color: "#13B5BE" },
    { id: 2, left: 28, delay: "3s", duration: "20s", size: 10, color: "#F43F5E" },
    { id: 3, left: 55, delay: "6s", duration: "22s", size: 12, color: "#C7D2FE" },
    { id: 4, left: 82, delay: "4s", duration: "21s", size: 11, color: "#1E293B" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="leaf-item absolute top-[-40px]"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 1.35}px`,
            backgroundColor: leaf.color,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
          }}
        />
      ))}

      <style jsx>{`
        .leaf-item {
          border-radius: 0 100% 0 100%;
          opacity: 0.18;
          transform: rotate(-45deg);
          animation-name: leafFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes leafFall {
          from {
            transform: translateY(-40px) rotate(-45deg);
          }

          to {
            transform: translateY(110vh) rotate(220deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leaf-item {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#FFFDF8]">
        <FallingLeaves />

        <HeroSection />

        <div className="bg-[#FFFDF8]">
          <IntroSection />
          <StrengthSection />
          <CategorySection />
          <FeaturedSection type="edugame" />
        </div>

        <div className="bg-[#FFFDF8] bg-[url('/bg-pattern.png')] bg-cover bg-top bg-no-repeat">
          <FeaturedSection type="buku" />
          <RecommendationSection />
          <SubscriptionSection />
          <CtaSection />
        </div>
      </main>

      <Footer />
    </>
  );
}