"use client";

import { hrData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function EducationLanguages() {
  const { languages } = hrData;
  const t = useTranslations("HR.EducationLanguages");
  const languagesTranslations = t.raw("languagesItems") as Array<{ name: string; level: string }>;
  const education = t.raw("education") as Record<string, string>;

  return (
    <section id="education" className="relative z-10">
      <div className="mb-12 md:mb-20">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— {t('subtitle')}</p>
        <h2 className="text-3xl sm:text-5xl font-bold">
          {t('educationTitle')} & {t('languagesTitle')}<span className="text-[#BA4242]">.</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 group"
        >
          <div className="p-10 rounded-none border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#BA4242]/30 transition-all duration-300 h-full relative overflow-hidden">
            <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 group-hover:text-[#BA4242] transition-colors duration-500 pointer-events-none">
              <Icon icon="bx:book-reader" width="160" height="160" />
            </div>

            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Icon icon="bx:book-bookmark" className="text-[#BA4242] " width="24" height="24" />
              {t('educationTitle')}
            </h3>

            <div className="flex flex-col gap-3 relative z-10">
              <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {education.degree}
              </h4>
              <p className="text-gray-400 leading-relaxed">{education.university}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm font-mono mt-6">
                <span className="px-3 py-1.5 rounded-none bg-black/50 border border-white/10 text-gray-400">
                  {education.dates}
                </span>
                <span className="px-3 py-1.5 rounded-none border border-[#BA4242]/30 bg-[#BA4242]/5 text-white font-semibold flex items-center gap-2 ">
                  <Icon icon="bx:award" width="16" height="16" className="text-[#BA4242]" />
                  {education.gpaLabel} {education.gpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="md:w-1/2 group"
        >
          <div className="p-10 rounded-none border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#BA4242]/30 transition-all duration-300 h-full relative overflow-hidden">
            <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 group-hover:text-[#BA4242] transition-colors duration-500 pointer-events-none">
              <Icon icon="bx:world" width="160" height="160" />
            </div>

            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <Icon icon="bx:message-rounded-dots" className="text-[#BA4242] " width="24" height="24" />
              {t('languagesTitle')}
            </h3>

            <ul className="flex flex-col gap-6 relative z-10">
              {languages.map((lang, idx) => {
                const locLang = languagesTranslations[idx] || lang;
                return (
                  <li key={lang.name} className="flex items-center justify-between group/item p-4 rounded-none border border-white/10 bg-black/30 hover:border-white/20 hover:bg-black/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl drop-shadow-md group-hover/item:scale-110 transition-transform">{lang.icon}</span>
                      <span className="font-semibold text-white text-lg">{locLang.name}</span>
                    </div>
                    <span className="text-[#BA4242] text-sm font-mono px-4 py-1.5 bg-[#BA4242]/10 rounded-none border border-[#BA4242]/20">
                      {locLang.level}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}