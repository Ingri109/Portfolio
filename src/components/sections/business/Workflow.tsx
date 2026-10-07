import { useTranslations } from "next-intl";

export function Workflow() {
  const t = useTranslations("Business.Workflow");
  const items = t.raw("items") as Array<{
    step: number;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" >
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="mb-12 md:mb-20">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— 02 / WORKFLOW</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            {t('title')}<span className="text-[#BA4242]">.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col relative w-full">
          {items.map((step, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={index} className="flex flex-col relative w-full mb-8 sm:mb-10 last:mb-0">

                <div className="w-full relative z-10 group">
                  <div className="p-6 sm:p-8 border border-white/10 bg-white/[0.03] hover:border-[#BA4242]/50 hover:bg-[#BA4242]/5 transition-all duration-300 relative rounded-none flex flex-col">
                    <div className="text-[#BA4242] font-mono text-lg sm:text-xl mb-4 sm:mb-6 pb-4 border-b border-white/10 group-hover:border-[#BA4242]/30 transition-colors flex items-center justify-between">
                      <span>{t('stepLabel')} 0{step.step}.</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Connecting arrow strictly from bottom of this box to top of next */}
                {!isLast && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 sm:h-10 bg-[#BA4242]/40 z-20">
                    {/* Arrow head aligned to end exactly at the top border of next block */}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 -left-[4.5px] text-[#BA4242]/70"
                    >
                      <path d="M5 10L0 0H10L5 10Z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
