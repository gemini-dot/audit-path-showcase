import frenchCv from '@/assets/cv-gemini-chinasamy.pdf.asset.json';
import englishCv from '@/assets/cv-gemini-chinasamy-en.pdf.asset.json';
import type { Language } from '@/lib/cv-data';

export function getCvDownload(language: Language) {
  return language === 'en'
    ? { url: englishCv.url, filename: 'CV_Gemini_CHINASAMY_EN.pdf' }
    : { url: frenchCv.url, filename: 'CV_Gemini_CHINASAMY.pdf' };
}