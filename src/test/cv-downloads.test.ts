import { describe, expect, it } from 'vitest';
import { getCvDownload } from '../lib/cv-downloads';
import frenchCv from '../assets/cv-gemini-chinasamy.pdf.asset.json';
import englishCv from '../assets/cv-gemini-chinasamy-en.pdf.asset.json';

describe('Téléchargement bilingue', () => {
  it('sert le PDF original lorsque le français est choisi', () => {
    expect(getCvDownload('fr')).toEqual({ url: frenchCv.url, filename: 'CV_Gemini_CHINASAMY.pdf' });
  });
  it('sert le PDF traduit lorsque l’anglais est choisi', () => {
    expect(getCvDownload('en')).toEqual({ url: englishCv.url, filename: 'CV_Gemini_CHINASAMY_EN.pdf' });
    expect(getCvDownload('en').url).not.toBe(getCvDownload('fr').url);
  });
});