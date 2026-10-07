"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';
import { Icon } from '@iconify/react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative inline-flex items-center">
      <Icon icon="lucide:globe" className="text-gray-400 absolute left-2 pointer-events-none" width="14" height="14" />
      <select
        defaultValue={locale}
        onChange={handleLocaleChange}
        disabled={isPending}
        className="appearance-none bg-transparent pl-7 pr-4 py-1 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white cursor-pointer focus:outline-none disabled:opacity-50 transition-colors"
      >
        <option value="en" className="bg-[#0a0a0a]">EN</option>
        <option value="uk" className="bg-[#0a0a0a]">UK</option>
        <option value="pl" className="bg-[#0a0a0a]">PL</option>
      </select>
      <Icon icon="lucide:chevron-down" className="text-gray-400 absolute right-0 pointer-events-none" width="12" height="12" />
    </div>
  );
}
