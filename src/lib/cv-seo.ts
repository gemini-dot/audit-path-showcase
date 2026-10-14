import shareImage from '@/assets/gemini-share.jpg.asset.json';
import { cvCopy, type Language } from '@/lib/cv-data';

const siteUrl = 'https://gemini.chinasamy.com';
const languageUrls = {
  fr: `${siteUrl}/?lang=fr`,
  en: `${siteUrl}/?lang=en`,
};

export function getCvHead(language: Language) {
  const copy = cvCopy[language];
  const imageUrl = new URL(shareImage.url, siteUrl).href;
  const locale = language === 'en' ? 'en_GB' : 'fr_FR';
  const alternateLocale = language === 'en' ? 'fr_FR' : 'en_GB';

  return {
    meta: [
      { title: copy.title },
      { name: 'description', content: copy.description },
      { property: 'og:title', content: copy.title },
      { property: 'og:description', content: copy.description },
      { property: 'og:type', content: 'profile' },
      { property: 'og:url', content: languageUrls[language] },
      { property: 'og:locale', content: locale },
      { property: 'og:locale:alternate', content: alternateLocale },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: copy.photoAlt },
      { property: 'profile:first_name', content: 'Gemini' },
      { property: 'profile:last_name', content: 'CHINASAMY' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: copy.title },
      { name: 'twitter:description', content: copy.description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: copy.photoAlt },
    ],
    links: [
      { rel: 'canonical', href: languageUrls[language] },
      { rel: 'alternate', hrefLang: 'fr', href: languageUrls.fr },
      { rel: 'alternate', hrefLang: 'en', href: languageUrls.en },
      { rel: 'alternate', hrefLang: 'x-default', href: `${siteUrl}/` },
    ],
  };
}