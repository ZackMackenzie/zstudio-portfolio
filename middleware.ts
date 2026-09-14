import { NextRequest, NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from './lib/i18n/types';
import { detectLocaleFromAcceptLanguage } from './lib/i18n/detect';

const LOCALE_COOKIE = 'z_locale';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    (cookieLocale && LOCALES.includes(cookieLocale as (typeof LOCALES)[number]) && cookieLocale) ||
    detectLocaleFromAcceptLanguage(request.headers.get('accept-language')) ||
    DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match everything except: Next internals, API routes, and files with an extension
     * (static assets in /public — favicon, images, sitemap.xml, robots.txt, etc.)
     */
    '/((?!_next|api|.*\\..*).*)',
  ],
};
