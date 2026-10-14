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
export type Language = 'fr' | 'en';
export const contactEmail = 'gemini@chinasamy.com';
export const contactPhone = '06.47.43.65.27';
export const contactPhoneHref = 'tel:+33647436527';

export const englishExperiences: typeof experiences = [
  {
    id: 'audit-manager', period: '2019 — Present', dates: 'January 2019 — Present', company: 'Wakam', companyDetail: 'Formerly La Parisienne Assurances', role: 'Audit Manager', current: true,
    summary: 'Lead partner and operational audits, strengthen risk management and support developments across the insurance sector.',
    details: [
      'Plan and conduct preliminary reviews and process audits in France and internationally: underwriting, policy administration, property damage and bodily injury claims, recoveries and complaints.',
      'Continuously review audit methodology and improve tools. Draft reports, present recommendations to governance bodies and monitor corrective action plans.',
      'Implement the risk management framework: risk mapping, early-warning indicators and tolerance thresholds. Strengthen internal controls and audit wholesale insurance brokers.',
      'Monitor regulatory compliance and insurance developments, support teams across multiple locations and lead follow-up committees.',
    ], tags: ['Partner audits', 'Risk management', 'Change management'],
  },
  {
    id: 'conformite', period: '2017 — 2018', dates: 'June 2017 — December 2018', company: 'Wakam', companyDetail: 'Formerly La Parisienne Assurances', role: 'Head of Partnership Compliance', current: false,
    summary: 'Develop the partner audit methodology and oversee operational compliance.',
    details: ['Collaboratively develop and continuously improve partner audit methodology.', 'Conduct process and operational audits in France and internationally: policies, claims and complaints across motor, motorcycle, home, rent guarantee, health and affinity insurance.', 'Draft audit reports and manage post-audit action plans.'], tags: ['Compliance', 'Operational audits', 'Action plans'],
  },
  {
    id: 'controle', period: '2013 — 2017', dates: 'September 2013 — May 2017', company: 'Solly Azar Assurances', companyDetail: 'Wholesale insurance broker', role: 'Head of Quality & Internal Control', current: false,
    summary: 'Lead the quality team and implement a continuous improvement and risk management approach.',
    details: ['Lead and coordinate the quality team and monitor the Quality & Risk Management policy.', 'Contribute to the implementation of Solvency II and monitor compliance with procedures, operating guidelines and processes.', 'Implement customer relationship measurement tools and train employees in quality and risk management.', 'Coordinate internal, external and supplier audits.'], tags: ['Internal control', 'Solvency II', 'Quality'],
  },
  {
    id: 'projets', period: '2009 — 2013', dates: 'November 2009 — August 2013', company: 'Solly Azar Assurances', companyDetail: 'Wholesale insurance broker', role: 'Quality & Compliance Project Officer', current: false,
    summary: 'Coordinate Quality, Compliance & Risk projects and support the transformation of business practices.',
    details: ['Coordinate projects and manage associated risks, change initiatives and performance management plans.', 'Implement and embed the Quality, Compliance and Risk approach.', 'Propose continuous improvement plans and monitor regulatory and technological developments.'], tags: ['Project management', 'Performance', 'Transformation'],
  },
  {
    id: 'sinistres', period: '2008 — 2009', dates: 'March 2008 — October 2009', company: 'Solly Azar Assurances', companyDetail: 'Wholesale insurance broker', role: 'Policy & Claims Handler / P&C Technical Specialist', current: false,
    summary: 'Support policy and claims teams and provide technical expertise on complex cases.',
    details: ['Support employees, identify training needs and share information.', 'Analyse complex cases in accordance with handling guidelines and the French Insurance Code.', 'Identify operational issues and approve claims settlements within delegated authority.'], tags: ['Complex claims', 'P&C expertise', 'Team support'],
  },
];

export const englishCategories: Record<Category, string> = {
  'Toutes': 'All', 'Audit & Risques': 'Audit & Risk', 'Conformité': 'Compliance', 'Management': 'Management', 'Sinistres IARD': 'P&C Claims',
};
const englishSkills: Record<string, string> = {
  'Audit de processus': 'Process audits', 'Audit partenaires': 'Partner audits', 'Contrôle interne': 'Internal control', 'Cartographie des risques': 'Risk mapping',
  'Solvabilité II': 'Solvency II', 'DDA': 'Insurance Distribution Directive (IDD)', 'LCB-FT': 'Anti-money laundering & counter-terrorist financing', 'RGPD': 'GDPR', 'Veille réglementaire': 'Regulatory monitoring',
  'Conduite du changement': 'Change management', 'Pilotage de projets': 'Project management', 'Formation & sensibilisation': 'Training & awareness', 'Sinistres complexes': 'Complex claims', 'Auto & Moto': 'Motor & motorcycle', 'MRH, MRI & GLI': 'Home, property & rent guarantee insurance', 'Recours & Réclamations': 'Recoveries & complaints',
};
export function getExperiences(language: Language) { return language === 'en' ? englishExperiences : experiences; }
export function getSkills(category: Category, language: Language) {
  return filterSkills(category).map(skill => ({ ...skill, name: language === 'en' ? englishSkills[skill.name] ?? skill.name : skill.name }));
}

export const cvCopy = {
  fr: {
    title: 'Gemini CHINASAMY — Audit Manager & Expert Stratégie Sinistres IARD',
    description: 'Le parcours de Gemini CHINASAMY : audit, maîtrise des risques, conformité réglementaire et stratégie sinistres IARD à Paris.',
    nav: ['Profil', 'Parcours', 'Expertises', 'Formation'], home: 'Gemini Chinasamy, accueil', contact: 'Prenons contact', closeMenu: 'Fermer le menu', openMenu: 'Ouvrir le menu', mainNav: 'Navigation principale', mobileNav: 'Navigation mobile',
    eyebrow: 'AUDIT · RISQUES · ASSURANCE', role: ['Audit Manager & Expert', 'Stratégie Sinistres IARD'], heroDescription: ['Une vision stratégique. Une exigence opérationnelle.', 'Au service de la maîtrise des risques.'], download: 'Télécharger mon CV', discover: 'Découvrir mon parcours', location: 'Paris et périphérie', caption: 'Rigueur. Vision. Impact.', discoverProfile: 'Découvrir le profil',
    credentialsLabel: 'Repères professionnels', years: 'années dans l’assurance', auditRisk: 'Audit & Risques', transversal: 'une expertise transversale', international: 'France & International', borders: 'un regard sans frontières', excellence: 'Conformité & excellence opérationnelle',
    profileLabel: '01 / PROFIL', profileHeading: ['La rigueur de l’audit.', 'La vision du terrain.'], intro: ['De la gestion de sinistres complexes au pilotage des audits, mon parcours s’est construit au plus près des réalités de l’assurance.', 'Chez Wakam, j’accompagne les partenaires et les équipes dans la maîtrise de leurs risques, le renforcement de leur conformité et l’amélioration de leurs processus. Une approche qui conjugue analyse, exigence et accompagnement du changement.'],
    careerLabel: '02 / PARCOURS', careerHeading: 'Un parcours, une progression.', oldest: 'Du premier au plus récent', newest: 'Du plus récent au premier', current: 'EN POSTE',
    expertiseLabel: '03 / EXPERTISES', expertiseHeading: 'Comprendre. Sécuriser. Transformer.', expertiseAside: ['Des compétences complémentaires,', 'une même exigence de qualité.'], categoriesLabel: 'Catégories de compétences', expertiseNote: 'Une expertise assurantielle ancrée dans la pratique, de l’analyse des dossiers à la gouvernance des risques.',
    educationLabel: '04 / FORMATION', educationHeading: 'Des bases solides.', education: ['BTS Management des Unités Commerciales', 'Bac STT Commerce / Communication'], school: 'Lycée Jacques Brel', languagesLabel: 'LANGUES', languagesHeading: 'Un horizon international.', languages: [{ name: 'Français', level: 'Natif', className: 'native' }, { name: 'Anglais', level: 'Bilingue', className: 'bilingual' }, { name: 'Espagnol', level: 'Compétence professionnelle limitée', className: 'working' }],
    contactLabel: '05 / CONTACT', contactHeading: ['Échangeons sur', 'vos enjeux'], contactDescription: ['Audit, conformité, stratégie sinistres.', 'Les conversations qui font avancer commencent ici.'], message: 'Envoyer un message', portraitAlt: 'Portrait de Gemini Chinasamy', photoAlt: 'Gemini Chinasamy en costume noir et cravate', shortRole: 'Audit Manager & Expert IARD', linkedin: 'Retrouvons-nous sur LinkedIn', copied: 'Adresse copiée', copy: 'Copier l’adresse e-mail', copyError: 'Copie indisponible. Adresse :', top: 'Retour en haut',
  },
  en: {
    title: 'Gemini CHINASAMY — Audit Manager & P&C Claims Strategy Expert',
    description: 'Explore Gemini CHINASAMY’s experience in audit, risk management, regulatory compliance and property & casualty claims strategy in Paris.',
    nav: ['Profile', 'Experience', 'Expertise', 'Education'], home: 'Gemini Chinasamy, home', contact: 'Get in touch', closeMenu: 'Close menu', openMenu: 'Open menu', mainNav: 'Main navigation', mobileNav: 'Mobile navigation',
    eyebrow: 'AUDIT · RISK · INSURANCE', role: ['Audit Manager & Expert', 'P&C Claims Strategy'], heroDescription: ['Strategic vision. Operational excellence.', 'Committed to effective risk management.'], download: 'Download my CV', discover: 'Explore my experience', location: 'Greater Paris area', caption: 'Rigour. Vision. Impact.', discoverProfile: 'Explore the profile',
    credentialsLabel: 'Professional highlights', years: 'years in insurance', auditRisk: 'Audit & Risk', transversal: 'cross-functional expertise', international: 'France & International', borders: 'a perspective beyond borders', excellence: 'Compliance & operational excellence',
    profileLabel: '01 / PROFILE', profileHeading: ['The rigour of audit.', 'A hands-on perspective.'], intro: ['From handling complex claims to leading audits, my career has been shaped by the practical realities of the insurance industry.', 'At Wakam, I support partners and teams in managing their risks, strengthening compliance and improving their processes. An approach that combines analysis, rigour and support for change.'],
    careerLabel: '02 / EXPERIENCE', careerHeading: 'A career built on progress.', oldest: 'Oldest to newest', newest: 'Newest to oldest', current: 'CURRENT ROLE',
    expertiseLabel: '03 / EXPERTISE', expertiseHeading: 'Understand. Safeguard. Transform.', expertiseAside: ['Complementary skills,', 'a shared commitment to quality.'], categoriesLabel: 'Skill categories', expertiseNote: 'Insurance expertise grounded in practice, from case analysis to risk governance.',
    educationLabel: '04 / EDUCATION', educationHeading: 'Strong foundations.', education: ['BTS in Business Unit Management (French two-year higher education diploma)', 'STT Baccalaureate in Commerce / Communication (French secondary diploma)'], school: 'Jacques Brel High School', languagesLabel: 'LANGUAGES', languagesHeading: 'An international outlook.', languages: [{ name: 'French', level: 'Native', className: 'native' }, { name: 'English', level: 'Bilingual', className: 'bilingual' }, { name: 'Spanish', level: 'Limited professional proficiency', className: 'working' }],
    contactLabel: '05 / CONTACT', contactHeading: ['Let’s discuss', 'your challenges'], contactDescription: ['Audit, compliance and claims strategy.', 'Conversations that move things forward start here.'], message: 'Send a message', portraitAlt: 'Portrait of Gemini Chinasamy', photoAlt: 'Gemini Chinasamy wearing a black suit and tie', shortRole: 'Audit Manager & P&C Expert', linkedin: 'Connect with me on LinkedIn', copied: 'Email copied', copy: 'Copy email address', copyError: 'Copy unavailable. Email:', top: 'Back to top',
  },
};
