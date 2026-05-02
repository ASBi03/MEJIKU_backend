"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

const navItems = [
  { label: "Beranda", href: "#"},
  { label: "Kelebihan", href: "#kelebihan" },
  { label: "Edugame", href: "#edugame" },
  { label: "Buku", href: "#buku" },
  { label: "Panduan", href: "#" },
  { label: "Berlangganan", href: "#berlangganan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D7EEFF] bg-white/95 backdrop-blur">
      <Container className="relative flex h-[70px] items-center justify-between">
        <Link href="/">
          <img src="/favicon.png" alt="Mejiku" className="h-[50px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-heading text-sm font-semibold text-[#173B75] transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="secondary-button h-10 px-6 py-0">
            Masuk
          </Link>

          <Link href="/register" className="primary-button h-10 px-6 py-0">
            Daftar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-[#D7EEFF] px-3 py-2 font-heading font-semibold text-[#173B75] md:hidden"
        >
          ☰
        </button>

        {open && (
          <div className="absolute left-4 right-4 top-[78px] rounded-3xl border border-[#D7EEFF] bg-white p-4 shadow-lg md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 font-heading text-sm font-semibold text-[#173B75] hover:bg-[#EAF7FF]"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link href="/login" className="secondary-button h-10 px-4 py-0">
                  Masuk
                </Link>

                <Link href="/register" className="primary-button h-10 px-4 py-0">
                  Daftar
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}