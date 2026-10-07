"use client";

import { useTranslations } from "next-intl";
import { businessData } from "@/lib/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function BusinessHero() {
  const t = useTranslations("Business.Hero");
  const ctaLink = businessData.hero.cta.link; // Still keeping the link from data

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BA4242]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#BA4242]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 max-w-fit">
             <span className="w-2 h-2 rounded-full bg-[#BA4242] animate-pulse"></span>
             <span className="text-sm font-mono text-gray-300 uppercase tracking-wider text-xs">{t('availableBadge')}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto drop-shadow-lg">
            {t('title').replace('.', '')}<span className="text-[#BA4242]">.</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-none border border-[#BA4242] bg-[#BA4242]/10 text-white font-semibold hover:bg-[#BA4242] transition-all duration-300 shadow-[0_0_20px_rgba(186,66,66,0.2)] hover:shadow-[0_0_30px_rgba(186,66,66,0.4)] relative"
            >
              <span>{t('cta.text')}</span>
              <Icon icon="ph:arrow-right-light" className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="group flex items-center gap-3 px-8 py-4 rounded-none border border-white/10 bg-white/[0.03] text-gray-300 font-semibold hover:bg-white/[0.08] hover:text-white transition-all duration-300"
            >
              <span>{t('whatIOffer')}</span>
              <Icon icon="ph:caret-down-light" className="text-xl group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
    </section>
  );
}
