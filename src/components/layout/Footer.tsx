import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export function Footer() {
  const t = useTranslations("HR.Contact");
  const tHero = useTranslations("HR.Hero");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative mt-24">
      {/* Gradient Separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA4242] to-transparent opacity-50" />
      <div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#BA4242]/5 to-transparent blur-xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side: CTA & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold font-sans tracking-tight mb-2">
            {t('cta')}
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            {t('description')}
          </p>
        </div>

        {/* Right Side: Links & Locale */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/orest-muzyka-fullstackdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#BA4242] transition-colors group"
            >
              <Icon icon="akar-icons:linkedin-box-fill" width="20" height="20" />
              <span className="text-sm font-medium">LinkedIn</span>
              <Icon icon="akar-icons:arrow-up-right" width="14" height="14" className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a
              href="https://github.com/Ingri109"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-[#BA4242] transition-colors group"
            >
              <Icon icon="akar-icons:github-fill" width="20" height="20" />
              <span className="text-sm font-medium">GitHub</span>
              <Icon icon="akar-icons:arrow-up-right" width="14" height="14" className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a
              href="mailto:orest.muzyka.it@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-[#BA4242] transition-colors group"
            >
              <Icon icon="ci:mail" width="20" height="20" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
          <div className="mt-2 border border-white/10 p-2 bg-white/[0.02]">
            <LocaleSwitcher />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-8 flex items-center justify-center text-xs text-gray-500 border-t border-white/5 pt-8 mt-4">
        <p>© {currentYear} {tHero('name')}. {t('rights')}</p>
      </div>
    </footer>
  );
}
