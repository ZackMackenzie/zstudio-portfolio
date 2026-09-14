import { isLocale, type Locale } from '@/lib/i18n/types';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Contact } from '@/components/sections/Contact';
import { notFound } from 'next/navigation';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <Services dict={dict} locale={locale} />
      <SelectedWork dict={dict} locale={locale} />
      <Contact dict={dict} />
    </>
  );
}
