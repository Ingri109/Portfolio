"use client";

import { hrData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function Hero() {
  const { projects } = hrData;
  const t = useTranslations("HR.Hero");

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative pt-16 pb-12 md:pt-20 md:pb-16">
      {/* Background colored glows (smaller on mobile to prevent clipping) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] bg-[#BA4242]/20 md:bg-[#BA4242]/10 rounded-full blur-[50px] sm:blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px] bg-red-900/10 md:bg-red-900/5 rounded-full blur-[40px] sm:blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-20">

        {/* Left Side text */}
        <motion.div
          className="w-full lg:w-3/5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-[#BA4242]/30 bg-[#BA4242]/10 mb-8 relative">
             <span className="w-2 h-2 rounded-full bg-[#BA4242] animate-pulse"></span>
             <span className="text-xs font-mono text-gray-200 uppercase tracking-wider">{t('greeting')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white leading-[1.1]">
            {t('buildScalable')} <br className="hidden md:block" />
            <span className="text-gray-400">{t('webApplications')}<span className="text-[#BA4242]">.</span></span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-4 leading-relaxed">
            {t('imA')} <span className="text-[#BA4242] font-medium">{t('role')}</span>.{" "}
            {t('specialization')}.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-400 mb-10 font-mono tracking-wide">
            <Icon icon="ph:map-pin-light" className="text-[#BA4242] text-xl" />
            <span>{t('location')}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Link
              href={`#project-${projects[0]?.id || ''}`}
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-none border border-[#BA4242] bg-[#BA4242]/10 text-white font-semibold hover:bg-[#BA4242] hover:shadow-[0_0_20px_rgba(186,66,66,0.2)] transition-all duration-300 w-full sm:w-auto"
            >
              <span>{t('checkOutWork')}</span>
              <Icon icon="ph:arrow-right-light" className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Neon scroll button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">{t('scroll')}</span>
        <Link
          href="#tech-stack"
          className="w-6 h-10 rounded-full border border-gray-600 flex justify-center p-1 hover:border-[#BA4242] transition-all duration-300"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </Link>
      </motion.div>
    </section>
  );
}
