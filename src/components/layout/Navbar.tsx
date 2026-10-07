"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

interface NavbarProps {
  variant?: "hr" | "business";
}

export function Navbar({ variant: propVariant }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  // If prop Variant is not provided, deduce from pathname
  const variant = propVariant || (pathname?.startsWith("/business") ? "business" : "hr");

  const hrLinks = [
    { name: t("techStack"), href: "#tech-stack" },
    { name: t("experience"), href: "#experience" },
    { name: t("projects"), href: "#projects" },
    { name: t("forBusiness"), href: "/business" },
  ];

  const businessLinks = [
    { name: t("services"), href: "#services" },
    { name: t("workflow"), href: "#workflow" },
    { name: t("cases"), href: "#cases" },
    { name: t("forEmployers"), href: "/" },
  ];

  const navLinks = variant === "hr" ? hrLinks : businessLinks;
  const logoHref = variant === "hr" ? "/" : "/business";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-sm border-white/5 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href={logoHref}
          className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          OM<span className="text-[#BA4242]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <LocaleSwitcher />

            {variant === "hr" ? (
              <div className="flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.02] text-[10px] font-mono tracking-widest uppercase text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {t("available")}
              </div>
            ) : (
              <a
                href="https://instagram.com/om.webdew"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all text-xs font-mono tracking-widest uppercase text-gray-200"
              >
                {t("contact")}
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 p-2 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <Icon icon="ci:close-md" width="24" height="24" />
          ) : (
            <Icon icon="basil:menu-solid" width="24" height="24" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 flex flex-col items-center py-8 gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-4 flex flex-col items-center gap-6">
              <LocaleSwitcher />

              {variant === "hr" ? (
                <div className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.02] text-[10px] font-mono tracking-widest uppercase text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  {t("available")}
                </div>
              ) : (
                <a
                  href="https://instagram.com/om.webdew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all text-sm font-mono tracking-widest uppercase text-gray-200"
                >
                  {t("contact")}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
