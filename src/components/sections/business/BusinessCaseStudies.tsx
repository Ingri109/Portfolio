"use client";

import { businessData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

interface CaseStudyExtended {
  images?: string[];
  links?: { live?: string; github?: string; };
}

export function BusinessCaseStudies() {
  const { caseStudies } = businessData;
  const t = useTranslations("Business.CaseStudies");
  const items = t.raw("items") as Array<{
    id: string;
    title: string;
    task: string;
    solution: string;
    tags: string[];
  }>;

  return (
    <section className="py-32 relative " >
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="mb-20">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— 03 / CASE STUDIES</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            {t('title')}<span className="text-[#BA4242]">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {caseStudies.map((study, idx) => {
            const isEven = idx % 2 === 0;
            const locStudy = items.find(i => i.id === study.id) || study;

            return (
              <motion.div
                id={`case-study-${study.id}`}
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center group`}
              >
                {/* Image Carousel */}
                <div className="w-full md:w-1/2 aspect-video bg-white/[0.03] border border-white/10 rounded-none relative overflow-hidden hover:border-[#BA4242]/30 transition-all duration-300">
                  <ProjectCarousel images={(study as typeof study & CaseStudyExtended).images || []} />
                </div>

                {/* Project Details */}
                <div
                  className={`w-full md:w-1/2 flex flex-col relative z-20 ${
                    isEven ? "md:text-left" : "md:text-left md:items-end md:text-right"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-white transition-colors duration-300">
                      {locStudy.title}
                    </h3>
                  </div>

                  <div className={`bg-white/[0.03] border border-white/10 p-8 rounded-none mb-8 hover:bg-white/[0.05] hover:border-[#BA4242]/30 transition-all duration-300 w-full ${isEven ? "" : "md:text-right"}`}>

                    <div className="mb-6">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "" : "md:justify-end"}`}>
                        <Icon icon="ic:outline-task-alt" width="20" height="20" className="text-gray-400" />
                        <span className="text-gray-200 font-semibold uppercase tracking-wider text-sm">{t('taskLabel')}</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {locStudy.task}
                      </p>
                    </div>

                    <div>
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "" : "md:justify-end"}`}>
                         <Icon icon="mdi:lightbulb-on-outline" width="20" height="20" className="text-[#BA4242]" />
                        <span className="text-[#BA4242] font-semibold uppercase tracking-wider text-sm">{t('solutionLabel')}</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {locStudy.solution}
                      </p>
                    </div>

                  </div>

                  <ul
                    className={`flex flex-wrap gap-3 font-mono text-xs text-gray-400 ${
                      isEven ? "justify-start" : "justify-start md:justify-end"
                    }`}
                  >
                    {locStudy.tags.map((tag: string) => (
                      <li key={tag} className="px-3 py-1.5 rounded-none bg-black/50 border border-white/10 hover:border-[#BA4242]/50 hover:text-white transition-colors duration-300 cursor-default uppercase">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-8 flex items-center gap-4 ${
                      isEven ? "justify-start" : "justify-start md:justify-end"
                    }`}
                  >
                    {(study as typeof study & CaseStudyExtended).links?.live && (
                    <a
                      href={(study as typeof study & CaseStudyExtended).links?.live}
                      className="group/link flex items-center gap-2 px-4 py-2 rounded-none border border-white/10 bg-white/[0.03] text-gray-400 hover:text-[#BA4242] hover:border-[#BA4242]/30 hover:bg-[#BA4242]/5 transition-all duration-300"
                      aria-label="External Link"
                    >
                      <Icon icon="ci:external-link" width="20" height="20" className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium tracking-wide">{t('links.live')}</span>
                    </a>
                  )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
