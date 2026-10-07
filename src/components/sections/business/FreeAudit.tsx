import { useTranslations } from "next-intl";
import { Icon } from "@iconify/react";

export function FreeAudit() {
  const t = useTranslations("Business.FreeAudit");

  const contacts = [
    {
      name: "Telegram",
      value: t('telegramText'),
      link: "https://t.me/Ingri109",
      icon: "ph:telegram-logo-light"
    },
    {
      name: "Instagram",
      value: "@om.webdew",
      link: "https://instagram.com/om.webdew",
      icon: "ph:instagram-logo-light"
    },
    {
      name: "Email",
      value: (
        <span className="break-all sm:break-normal">
          orest.muzyka.it@<span className="sm:hidden"><br/></span>gmail.com
        </span>
      ),
      link: "mailto:orest.muzyka.it@gmail.com",
      icon: "ph:envelope-simple-light"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative border-t border-white/5 " id="free-audit">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#BA4242]/10 via-transparent to-transparent pointer-events-none" />
      <div className="container px-4 sm:px-6 mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">

        {/* Left Side: Text */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          <p className="text-[#BA4242] text-xs tracking-widest uppercase mb-4 font-mono">— {t('subtitle')}</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            {t('title').replace('?', '')}<span className="text-[#BA4242]">?</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Right Side: Contacts */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-4 text-white">{t('contactTitle')}</h3>
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 border border-white/10 bg-white/[0.02] hover:bg-[#BA4242]/10 hover:border-[#BA4242]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-none bg-black/50 border border-white/5 group-hover:border-[#BA4242]/50 transition-colors">
                <Icon icon={contact.icon} className="text-2xl text-gray-400 group-hover:text-[#BA4242] transition-colors" />
              </div>
              <div>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-wider mb-1">{contact.name}</p>
                <p className="text-white font-medium text-base sm:text-lg group-hover:text-[#BA4242] transition-colors">{contact.value}</p>
              </div>
              <Icon icon="ph:arrow-up-right-light" className="ml-auto text-2xl text-gray-600 group-hover:text-[#BA4242] transition-colors" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
