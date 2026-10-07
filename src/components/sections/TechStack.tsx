"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const TECH_CATEGORIES = [
  {
    title: "Frontend",
    icon: "bx:code-alt",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Services",
    icon: "bx:server",
    skills: ["C# .NET", "Node.js", "Nest.js", "GraphQL", "Microservices"],
  },
  {
    title: "Infrastructure & Data",
    icon: "bx:data",
    skills: ["PostgreSQL", "Redis", "RabbitMQ", "WebSockets", "Supabase"],
  },
];

export function TechStack() {
  const t = useTranslations("HR.TechStack");
  return (
    <section  className="py-16 md:py-24 lg:py-32 relative z-10">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="mb-10 md:mb-16">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">— 01 / CAPABILITIES</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            {t("title")}<span className="text-[#BA4242]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="p-8 rounded-none border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#BA4242]/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-20 group-hover:text-[#BA4242] transition-all duration-500 rotate-12 group-hover:rotate-0">
                <Icon icon={category.icon} width="120" height="120" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-none bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#BA4242] group-hover:border-[#BA4242]/50 transition-all duration-300 relative z-10">
                  <Icon icon={category.icon} width="24" height="24" />
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300 relative z-10">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 rounded-none bg-black/50 border border-white/10 text-sm font-mono text-gray-400 group-hover:border-white/20 hover:!border-[#BA4242]/50 hover:!text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
