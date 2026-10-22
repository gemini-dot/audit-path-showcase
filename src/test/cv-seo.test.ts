import { describe, expect, it } from 'vitest';
import { getCvHead } from '../lib/cv-seo';

describe('Bilingual CV sharing', () => {
  it.each(['fr', 'en'] as const)('self-references the %s language URL', language => {
    const head = getCvHead(language);
    const expectedUrl = `https://gemini.chinasamy.com/cv?lang=${language}`;
    expect(head.links.find(link => link.rel === 'canonical')?.href).toBe(expectedUrl);
    expect(head.meta.find(tag => tag.property === 'og:url')?.content).toBe(expectedUrl);
    expect(head.links.filter(link => link.rel === 'alternate').map(link => link.hrefLang)).toEqual(['fr', 'en', 'x-default']);
  });

  it('advertises reciprocal French and English locales', () => {
    expect(getCvHead('fr').meta.find(tag => tag.property === 'og:locale')?.content).toBe('fr_FR');
    expect(getCvHead('en').meta.find(tag => tag.property === 'og:locale')?.content).toBe('en_GB');
    expect(getCvHead('fr').meta.find(tag => tag.property === 'og:locale:alternate')?.content).toBe('en_GB');
    expect(getCvHead('en').meta.find(tag => tag.property === 'og:locale:alternate')?.content).toBe('fr_FR');
  });

  it('shares the same absolute, compact photo on Open Graph and X', () => {
    const head = getCvHead('fr');
    const image = head.meta.find(tag => tag.property === 'og:image')?.content;
    expect(image).toMatch(/^https:\/\/gemini\.chinasamy\.com\/__l5e\/assets-v1\//);
    expect(head.meta.find(tag => tag.name === 'twitter:image')?.content).toBe(image);
    expect(head.meta.find(tag => tag.property === 'og:image:width')?.content).toBe('1200');
    expect(head.meta.find(tag => tag.property === 'og:image:height')?.content).toBe('630');
  });
});