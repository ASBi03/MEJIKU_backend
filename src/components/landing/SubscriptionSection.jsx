import Container from "@/components/layout/Container";
import { plans } from "@/data/plans";

export default function SubscriptionSection() {
  return (
    <section id="berlangganan" className="bg-transparent pt-6 pb-8 md:pt-8 md:pb-10">
      <Container>
        <h2 className="mx-auto max-w-[680px] text-center font-heading text-[28px] font-bold leading-tight text-[#173B75] md:text-[34px]">
          Pilih paket terbaik untuk pengalaman belajar anak!
        </h2>
      </Container>

      <div className="mt-6 w-full overflow-x-auto scrollbar-hide">
        <Container>
          <div className="flex w-max gap-4 pb-5">
            {plans.map((plan, index) => {
              const isBlue = index % 2 === 0;

              return (
                <article
                  key={plan.title}
                  className={`flex min-h-[365px] w-[250px] flex-shrink-0 flex-col rounded-[24px] border-2 ${
                    isBlue ? "border-[#009EFF]" : "border-[#F66606]"
                  } bg-white p-4 shadow-sm sm:w-[260px] md:min-h-[390px] md:w-[285px]`}
                >
                  <div>
                    <div
                      className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full ${
                        isBlue ? "bg-[#EAF7FF] text-[#009EFF]" : "bg-[#FFF1C8] text-[#F66606]"
                      }`}
                    >
                      <span className="font-heading text-xl font-semibold">✦</span>
                    </div>

                    <h3 className="font-heading text-[25px] font-bold leading-snug text-[#173B75] md:text-[19px]">
                      {plan.title}{" "}
                      <span className="italic">({plan.subtitle})</span>
                    </h3>

                    <span
                      className={`mt-3 inline-flex rounded-full px-3 py-1 font-heading text-[12px] font-semibold ${
                        isBlue
                          ? "bg-[#EAF7FF] text-[#009EFF]"
                          : "bg-[#FFF1C8] text-[#F66606]"
                      }`}
                    >
                      {plan.badge}
                    </span>

                    <p className="mt-4 font-heading text-[17px] font-semibold text-[#173B75] md:text-[15px]">
                      Harga:{" "}
                      <span
                        className={`text-[20px] ${
                          isBlue ? "text-[#009EFF]" : "text-[#F66606]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-[17px] text-[#F66606]">
                        {plan.period}
                      </span>
                    </p>

                    <h4 className="mt-3 font-heading text-[17px] font-semibold text-[#173B75] md:text-[15px]">
                      Fitur yang kamu dapatkan:
                    </h4>

                    <ul className="mt-3 space-y-2 font-body text-[14px] leading-5 text-slate-700 md:text-xs mb-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className={isBlue ? "text-[#009EFF]" : "text-[#F66606]"}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/register"
                    className={`mt-auto inline-flex h-9 items-center justify-center rounded-full px-5 font-heading text-[13px] font-semibold text-white transition hover:scale-[1.03] ${
                      isBlue
                        ? "bg-[#009EFF] hover:bg-[#1EAAFF]"
                        : "bg-[#F66606] hover:bg-[#ff7a1a]"
                    }`}
                  >
                    {plan.button}
                  </a>
                </article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}