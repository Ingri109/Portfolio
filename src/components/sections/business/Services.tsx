import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("Business.Services");
  const items = t.raw("items") as Array<{
    id: string;
    title: string;
    forWhoLabel: string;
    forWho: string;
    featuresLabel: string;
    features: string;
    price: string;
  }>;

  return (
    <section className="py-24 relative" >
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="mb-16">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— 01 / SERVICES</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            {t('title')}<span className="text-[#BA4242]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((service, index) => (
            <div key={service.id} className="p-8 border border-white/10 bg-white/[0.03] hover:border-[#BA4242]/50 hover:bg-white/[0.05] transition-all duration-300 flex flex-col">
              <div className="text-[#BA4242] font-mono text-xl mb-6">0{index + 1}.</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <div className="mb-4">
                <span className="text-gray-300 text-sm font-semibold uppercase tracking-wider block mb-1">{service.forWhoLabel}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{service.forWho}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5">
                <span className="text-gray-300 text-sm font-semibold uppercase tracking-wider block mb-1">{service.featuresLabel}</span>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.features}</p>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">{t('priceLabel')}</span>
                  <span className="text-[#BA4242] font-mono font-bold text-xl">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:justify-end text-gray-500 text-sm font-mono tracking-tight">
          <p>
            <span className="text-[#BA4242] mr-2 text-base">*</span>
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
}
