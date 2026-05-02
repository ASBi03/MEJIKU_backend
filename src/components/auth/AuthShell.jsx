import Link from "next/link";

export default function AuthShell({ children }) {
  return (
    <main className="min-h-screen bg-[#FFFDF8]">
      <div className="grid min-h-screen lg:grid-cols-[1.1fr_1fr]">
        
        {/* LEFT IMAGE (DESKTOP ONLY) */}
        <section className="relative hidden lg:block">
          <img
            src="/logo-auth.png"
            alt="Mejiku"
            className="h-full w-full object-cover"
          />
        </section>

        {/* RIGHT SIDE */}
        <section className="relative flex items-center justify-center px-6 py-10 md:px-10">
          
          {/* BG PATTERN (FIXED SESUAI REQUEST) */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[55%] bg-[url('/bg-pattern.png')] bg-cover bg-bottom bg-no-repeat opacity-30" />

          {/* CONTENT */}
          <div className="relative z-10 w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}