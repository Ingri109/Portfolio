"use client";

import { hrData } from "@/lib/data";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ProjectCarousel } from "@/components/ui/ProjectCarousel";

interface ProjectExtended {
  images?: string[];
  links?: { github?: string; live?: string; };
}

export function Projects() {
  const t = useTranslations("HR.Projects");
  const tItems = t.raw("items") as Array<{
    id: string;
    type: string;
    title: string;
    description: string;
    features?: string[];
  }>;
  const { projects } = hrData;

  return (
    <section  className="py-32 relative z-10">
      <div className="mb-20">
        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— {t('subtitle')}</p>
        <h2 className="text-3xl sm:text-5xl font-bold">
          {t('title')}<span className="text-[#BA4242]">.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          const locProject = tItems.find((p) => p.id === project.id) || project as typeof tItems[0];

          return (
            <motion.div
              id={`project-${project.id}`}
              key={project.id}
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
                 <ProjectCarousel images={(project as typeof project & ProjectExtended).images || []} />
              </div>

              {/* Project Details */}
              <div
                className={`w-full md:w-1/2 flex flex-col relative z-20 ${
                  isEven ? "md:text-left" : "md:text-right"
                }`}
              >
                <p className="text-[#BA4242] font-mono text-sm mb-3 font-semibold uppercase tracking-wider">
                  {locProject.type}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white transition-colors duration-300">
                  {locProject.title}
                </h3>

                <div className="bg-white/[0.03] border border-white/10 p-8 rounded-none mb-8 hover:bg-white/[0.05] hover:border-[#BA4242]/30 transition-all duration-300">
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {locProject.description}
                  </p>

                  {locProject.features && (
                    <ul className="mt-6 flex flex-col gap-3 text-sm text-gray-400 text-left">
                      {locProject.features.map((feature: string, i: number) => (
                        <li key={i} className="flex gap-3 items-start">
                          <Icon icon="bx:check-circle" width="18" height="18" className="text-[#BA4242] shrink-0 mt-0.5 " />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <ul
                  className={`flex flex-wrap gap-3 font-mono text-xs text-gray-400 mb-8 ${
                    isEven ? "justify-start" : "justify-start md:justify-end"
                  }`}
                >
                  {project.stack.map((tech) => (
                    <li key={tech} className="px-3 py-1.5 rounded-none bg-black/50 border border-white/10 hover:border-[#BA4242]/50 hover:text-white transition-colors duration-300 cursor-default">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex flex-col sm:flex-row sm:items-center gap-4 ${
                    isEven ? "justify-start" : "justify-start md:justify-end"
                  }`}
                >
                  {(project as typeof project & ProjectExtended).links?.github && (
                    <a
                      href={(project as typeof project & ProjectExtended).links?.github}
                      className="group/link flex items-center justify-center sm:justify-start gap-2 px-4 py-2 w-full sm:w-auto rounded-none border border-white/10 bg-white/[0.03] text-gray-400 hover:text-[#BA4242] hover:border-[#BA4242]/30 hover:bg-[#BA4242]/5 transition-all duration-300"
                    aria-label="GitHub Repository"
                  >
                      <Icon icon="akar-icons:github-fill" width="20" height="20" className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium tracking-wide">{t('githubSource')}</span>
                    </a>
                  )}
                  {(project as typeof project & ProjectExtended).links?.live && (
                    <a
                      href={(project as typeof project & ProjectExtended).links?.live}
                      className="group/link flex items-center justify-center sm:justify-start gap-2 px-4 py-2 w-full sm:w-auto rounded-none border border-white/10 bg-white/[0.03] text-gray-400 hover:text-[#BA4242] hover:border-[#BA4242]/30 hover:bg-[#BA4242]/5 transition-all duration-300"
                    aria-label="External Link"
                  >
                      <Icon icon="ci:external-link" width="20" height="20" className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm font-medium tracking-wide">{t('liveDemo')}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}