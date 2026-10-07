"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export function Experience() {
  const t = useTranslations("HR.Experience");
  const experience = t.raw("items") as Array<{
    id: string;
    position: string;
    dates?: string;
    description: string;
    metrics: string[];
  }>;

  // Highlight metrics logic with new vivid gradients
  const renderDescription = (text: string, metrics: string[]) => {
    let result = text;
    metrics.forEach((metric) => {
      // Create a delimiter to split by
      const parts = result.split(metric);
      if (parts.length > 1) {
        result = parts.join(`___METRIC___${metric}___ENDMETRIC___`);
      }
    });

    return result.split("___METRIC___").map((part, i) => {
      if (part.includes("___ENDMETRIC___")) {
        const [metricValue, rest] = part.split("___ENDMETRIC___");
        return (
          <span key={i}>
            <span className="text-[#BA4242] font-bold inline-block mx-1">
              {metricValue}
            </span>
            {rest}
          </span>
        );
      }
      return <span key={i} className="text-gray-400">{part}</span>;
    });
  };

  return (
    <section  className="py-16 md:py-24 lg:py-32 relative z-10">
      <div className="mb-12 md:mb-20">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— {t('subtitle')}</p>
        <h2 className="text-3xl sm:text-5xl font-bold">
          {t('title')}<span className="text-[#BA4242]">.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative">
        {/* Glowing vertical line for desktop */}
        <div className="hidden md:block absolute left-[300px] top-6 bottom-0 w-px bg-gradient-to-b from-[#BA4242]/30 via-white/10 to-transparent" />

        {experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row gap-6 md:gap-16 group"
          >
                        {/* Desktop timeline circle */}
            <div className="hidden md:block absolute left-[300px] -translate-x-[5.5px] top-2 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#BA4242] group-hover:bg-[#BA4242] transition-colors duration-300 z-10" />

            {/* Timeline line for mobile */}
            <div className="md:hidden absolute left-0 top-8 bottom-[-48px] w-px bg-gradient-to-b from-[#BA4242]/30 to-white/10" />

            {/* Position / Title */}
            <div className="pl-6 md:pl-0 md:w-[260px] shrink-0 text-left md:text-right relative">
              <div className="absolute md:hidden left-[-4px] top-2 w-2 h-2 rounded-full bg-[#BA4242] " />
              

              <h3 className="text-2xl font-bold text-white group-hover:text-[#BA4242] transition-colors duration-300">
                {exp.position.split(" | ")[0]}
              </h3>
              <div className="flex items-center md:justify-end gap-2 text-gray-500 mt-2 font-mono text-sm tracking-wide">
                <Icon icon="bx:buildings" width="16" height="16" />
                {exp.position.split(" | ")[1]}
              </div>
              {exp.dates && (
                <div className="flex items-center md:justify-end gap-2 text-[#BA4242]/70 mt-1.5 font-mono text-xs uppercase tracking-widest">
                  <Icon icon="bx:calendar" width="14" height="14" />
                  {exp.dates}
                </div>
              )}
            </div>

            {/* Description Card */}
            <div className="md:flex-1 pl-6 md:pl-0">
              <div className="p-8 rounded-none border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#BA4242]/30 transition-all duration-300">
                <p className="leading-relaxed text-lg">
                  {renderDescription(exp.description, exp.metrics)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}