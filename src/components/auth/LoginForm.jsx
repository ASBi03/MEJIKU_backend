"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[320px] md:max-w-[360px]">
      <div className="text-center">
        <img
          src="/favicon.png"
          alt="Mejiku"
          className="mx-auto h-16 w-auto object-contain md:h-20"
        />

        <h1 className="mt-6 font-heading text-lg font-medium leading-tight text-[#173B75] md:text-xl">
          Yuk, Lanjutkan Misi Belajar Seru!
        </h1>

        <p className="mt-2 font-body text-xs leading-5 text-gray-600 md:text-sm">
          Silakan masuk untuk melanjutkan perjalanan belajar anak.
        </p>
      </div>

      <form className="mt-8 space-y-5">
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

          <div className="mt-2 text-right">
            <Link
              href="#"
              className="font-body text-[11px] text-[#F66606] hover:underline md:text-xs"
            >
              Lupa password?
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="h-10 w-full rounded-lg bg-[#16B8C2] font-heading text-sm font-medium text-white transition hover:bg-[#009EFF]"
        >
          Masuk
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
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

      <p className="mt-6 text-center font-body text-xs text-gray-500 md:text-sm">
        Belum punya akun?{" "}
        <Link href="/register" className="font-medium text-[#009EFF]">
          Daftar
        </Link>
      </p>
    </div>
  );
}