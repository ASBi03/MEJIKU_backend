"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[320px] md:max-w-[360px]">
      <div className="text-center">
        <img
          src="/favicon.png"
          alt="Mejiku"
          className="mx-auto h-14 w-auto object-contain md:h-18"
        />

        <h1 className="mt-4 font-heading text-lg font-medium leading-tight text-[#173B75] md:text-xl">
          Yuk, Mulai Misi Belajar Seru!
        </h1>

        <p className="mt-2 font-body text-xs leading-5 text-gray-600 md:text-sm">
          Daftarkan akun untuk mulai belajar bersama Mejiku.
        </p>
      </div>

      <form className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block font-heading text-xs font-medium text-[#173B75] md:text-sm">
            No. Telepon
          </label>
          <input
            type="tel"
            placeholder="Masukkan nomor telepon"
            className="h-10 w-full rounded-lg border border-gray-300 bg-white/90 px-4 font-body text-sm outline-none transition placeholder:text-gray-400 focus:border-[#009EFF]"
          />
        </div>

        <div>
          <label className="mb-1 block font-heading text-xs font-medium text-[#173B75] md:text-sm">
            Email
          </label>
          <input
            type="email"
            placeholder="Masukkan email"
            className="h-10 w-full rounded-lg border border-gray-300 bg-white/90 px-4 font-body text-sm outline-none transition placeholder:text-gray-400 focus:border-[#009EFF]"
          />
        </div>

        <div>
          <label className="mb-1 block font-heading text-xs font-medium text-[#173B75] md:text-sm">
            Username
          </label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="h-10 w-full rounded-lg border border-gray-300 bg-white/90 px-4 font-body text-sm outline-none transition placeholder:text-gray-400 focus:border-[#009EFF]"
          />
        </div>

        <div>
          <label className="mb-1 block font-heading text-xs font-medium text-[#173B75] md:text-sm">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              className="h-10 w-full rounded-lg border border-gray-300 bg-white/90 px-4 pr-10 font-body text-sm outline-none transition placeholder:text-gray-400 focus:border-[#009EFF]"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#009EFF]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="mb-1 block font-heading text-xs font-medium text-[#173B75] md:text-sm">
            Konfirmasi Password
          </label>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Masukkan ulang password"
              className="h-10 w-full rounded-lg border border-gray-300 bg-white/90 px-4 pr-10 font-body text-sm outline-none transition placeholder:text-gray-400 focus:border-[#009EFF]"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#009EFF]"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="h-10 w-full rounded-lg bg-[#16B8C2] font-heading text-sm font-medium text-white transition hover:bg-[#009EFF]"
        >
          Daftar
        </button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="font-body text-[11px] text-gray-500 md:text-xs">
          Atau lanjutkan dengan
        </span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      <button
        type="button"
        className="flex h-10 w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-white/90 font-heading text-sm font-medium text-black transition hover:bg-white hover:shadow-sm"
      >
        <img
          src="/icons/google.png"
          alt="Google"
          className="h-5 w-5 object-contain"
        />
        Google
      </button>

      <p className="mt-5 text-center font-body text-xs text-gray-500 md:text-sm">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-medium text-[#009EFF]">
          Masuk
        </Link>
      </p>
    </div>
  );
}