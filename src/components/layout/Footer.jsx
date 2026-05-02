import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#009EFF] text-white">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1.2fr_1fr] md:py-12">
        <div>
          <div>
            <img src="favicon.png" alt="Mejiku" className="h-14 w-auto" />
          </div>

          <p className="mt-4 max-w-[260px] font-body text-sm leading-6 text-white/90">
            Platform pembelajaran interaktif melalui edugame dan berbagai
            pilihan buku untuk anak.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-base font-bold text-white">
            Navigasi
          </h4>

          <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2 font-body text-sm text-white/90 md:block md:space-y-2">
            <li>Beranda</li>
            <li>Kelebihan</li>
            <li>Edugame</li>
            <li>Buku</li>
            <li>Panduan</li>
            <li>Berlangganan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-bold text-white">
            Kontak
          </h4>

          <ul className="mt-3 space-y-3 font-body text-sm text-white/90">
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src="/icons/instagram.png" alt="Instagram" className="h-4 w-4" />
              </span>
              @mejiku.id
            </li>

            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src="/icons/email.png" alt="Email" className="h-4 w-4" />
              </span>
              mejiku@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="h-4 w-4" />
              </span>
              085869511699
            </li>

            <li className="flex items-start gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                <img src="/icons/location.png" alt="Location" className="h-4 w-4" />
              </span>
              Jl. Bakungan No.10B, Sleman, DIY
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-bold text-white">
            Ikuti kami
          </h4>

          <div className="mt-3 flex gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <img src="/icons/instagram.png" alt="Instagram" className="h-5 w-5" />
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <img src="/icons/email.png" alt="Email" className="h-5 w-5" />
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/20 py-4">
        <Container className="flex flex-col  items-center text-center gap-2 font-body text-xs text-white/80 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mejiku. Hak Cipta Dilindungi.</p>

          <div className="flex gap-5">
            <span>Kebijakan Privasi</span>
            <span>Syarat & Ketentuan</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}