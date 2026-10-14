import { describe, expect, it } from 'vitest';
import { filterSkills } from '../lib/cv-data';

describe('Filtres des expertises', () => {
  it('ne conserve que la conformité lorsque cette catégorie est sélectionnée', () => {
    const result = filterSkills('Conformité');
    expect(result.map(skill => skill.name)).toEqual(['Solvabilité II', 'DDA', 'LCB-FT', 'RGPD', 'Veille réglementaire']);
    expect(result.every(skill => skill.category === 'Conformité')).toBe(true);
  });
});