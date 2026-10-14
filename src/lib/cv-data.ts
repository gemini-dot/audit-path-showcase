export const experiences = [
  {
    id: 'audit-manager', period: '2019 — Aujourd’hui', dates: 'Janvier 2019 — Aujourd’hui', company: 'Wakam', companyDetail: 'Ex-La Parisienne Assurances', role: 'Audit Manager', current: true,
    summary: 'Piloter les audits partenaires et opérationnels, renforcer la maîtrise des risques et accompagner les évolutions du secteur assurantiel.',
    details: [
      'Planification et réalisation des pré-audits et audits de processus en France et à l’international : souscription, contrats, sinistres matériels et corporels, recours et réclamations.',
      'Revue continue de la méthodologie d’audit et optimisation des outils. Rédaction des rapports, présentation des recommandations aux instances et suivi des plans d’action correctifs.',
      'Déploiement du dispositif de gestion des risques : cartographie, indicateurs d’alerte et seuils de tolérance. Renforcement du contrôle interne et audits des courtiers grossistes.',
      'Contrôle de la conformité réglementaire, veille assurantielle, accompagnement des équipes multi-sites et animation des comités de suivi.',
    ], tags: ['Audit partenaires', 'Maîtrise des risques', 'Conduite du changement'],
  },
  {
    id: 'conformite', period: '2017 — 2018', dates: 'Juin 2017 — Décembre 2018', company: 'Wakam', companyDetail: 'Ex-La Parisienne Assurances', role: 'Responsable Conformité Partenariats', current: false,
    summary: 'Structurer la méthodologie des audits partenaires et assurer le suivi de la conformité des opérations.',
    details: ['Construction collaborative et amélioration permanente de la méthodologie des audits partenaires.', 'Audits de processus et opérationnels en France et à l’international : contrats, sinistres et réclamations en Auto, Moto, MRH, GLI, Santé et Affinitaires.', 'Rédaction des rapports d’audit et pilotage des plans d’action post-audit.'], tags: ['Conformité', 'Audits opérationnels', 'Plans d’action'],
  },
  {
    id: 'controle', period: '2013 — 2017', dates: 'Septembre 2013 — Mai 2017', company: 'Solly Azar Assurances', companyDetail: 'Courtier grossiste en assurances', role: 'Responsable Qualité & Contrôle Interne', current: false,
    summary: 'Animer l’équipe qualité et déployer une démarche d’amélioration continue et de maîtrise des risques.',
    details: ['Animation et coordination de l’équipe qualité, suivi de la politique Qualité & Maîtrise des Risques.', 'Contribution au déploiement de Solvabilité II et contrôle du respect des procédures, modes opératoires et processus.', 'Déploiement des outils de mesure de la relation clients et formation des collaborateurs à la qualité et à la maîtrise des risques.', 'Coordination des audits internes, externes et fournisseurs.'], tags: ['Contrôle interne', 'Solvabilité II', 'Qualité'],
  },
  {
    id: 'projets', period: '2009 — 2013', dates: 'Novembre 2009 — Août 2013', company: 'Solly Azar Assurances', companyDetail: 'Courtier grossiste en assurances', role: 'Chargé des projets Qualité & Conformité', current: false,
    summary: 'Coordonner les projets Qualité, Conformité & Risques et accompagner la transformation des pratiques métiers.',
    details: ['Coordination des projets et pilotage des risques associés, conduite du changement et plans de management de la performance.', 'Déploiement et pérennisation de la démarche Qualité, Conformité et Risques.', 'Proposition de plans d’amélioration continue et veille réglementaire et technologique.'], tags: ['Gestion de projets', 'Performance', 'Transformation'],
  },
  {
    id: 'sinistres', period: '2008 — 2009', dates: 'Mars 2008 — Octobre 2009', company: 'Solly Azar Assurances', companyDetail: 'Courtier grossiste en assurances', role: 'Gestionnaire Contrats, Sinistres & Référent Technique IARD', current: false,
    summary: 'Accompagner les équipes contrats et sinistres et apporter une expertise technique sur les dossiers complexes.',
    details: ['Suivi des collaborateurs, identification des besoins de formation et partage de l’information.', 'Analyse des dossiers complexes au regard des règles de gestion et du Code des Assurances.', 'Identification des dysfonctionnements et validation des règlements de sinistres selon les pouvoirs accordés.'], tags: ['Sinistres complexes', 'Expertise IARD', 'Accompagnement'],
  },
];

export const categories = ['Toutes', 'Audit & Risques', 'Conformité', 'Management', 'Sinistres IARD'] as const;
export type Category = typeof categories[number];
export const skills: { name: string; category: Category }[] = [
  { name: 'Audit de processus', category: 'Audit & Risques' },
  { name: 'Audit partenaires', category: 'Audit & Risques' },
  { name: 'Contrôle interne', category: 'Audit & Risques' },
  { name: 'Cartographie des risques', category: 'Audit & Risques' },
  { name: 'Solvabilité II', category: 'Conformité' },
  { name: 'DDA', category: 'Conformité' },
  { name: 'LCB-FT', category: 'Conformité' },
  { name: 'RGPD', category: 'Conformité' },
  { name: 'Veille réglementaire', category: 'Conformité' },
  { name: 'Conduite du changement', category: 'Management' },
  { name: 'Pilotage de projets', category: 'Management' },
  { name: 'Formation & sensibilisation', category: 'Management' },
  { name: 'Sinistres complexes', category: 'Sinistres IARD' },
  { name: 'Auto & Moto', category: 'Sinistres IARD' },
  { name: 'MRH, MRI & GLI', category: 'Sinistres IARD' },
  { name: 'Recours & Réclamations', category: 'Sinistres IARD' },
];

export function filterSkills(category: Category) {
  return category === 'Toutes' ? skills : skills.filter(skill => skill.category === category);
}