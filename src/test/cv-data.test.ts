import { describe, expect, it } from 'vitest';
import { contactEmail, contactPhone, contactPhoneHref, filterSkills, getExperiences, getSkills } from '../lib/cv-data';

describe('Filtres des expertises', () => {
  it('ne conserve que la conformité lorsque cette catégorie est sélectionnée', () => {
    const result = filterSkills('Conformité');
    expect(result.map(skill => skill.name)).toEqual(['Solvabilité II', 'DDA', 'LCB-FT', 'RGPD', 'Veille réglementaire']);
    expect(result.every(skill => skill.category === 'Conformité')).toBe(true);
  });
});

describe('CV bilingue', () => {
  it('conserve les cinq expériences et leur chronologie dans chaque langue', () => {
    expect(getExperiences('en').map(item => ({ id: item.id, current: item.current }))).toEqual(getExperiences('fr').map(item => ({ id: item.id, current: item.current })));
    expect(getExperiences('en')).toHaveLength(5);
  });

  it('conserve le filtre conformité en anglais', () => {
    const result = getSkills('Conformité', 'en');
    expect(result).toHaveLength(5);
    expect(result.every(skill => skill.category === 'Conformité')).toBe(true);
  });

  it('utilise uniquement le contact conservé', () => {
    expect(contactEmail).toBe('gemini@chinasamy.com');
  });
  it('utilise le numéro fourni et sa forme internationale pour les appels', () => {
    expect(contactPhone).toBe('06.47.43.65.27');
    expect(contactPhoneHref).toBe('tel:+33647436527');
  });
});