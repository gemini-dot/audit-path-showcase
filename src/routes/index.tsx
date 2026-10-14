import { createFileRoute } from "@tanstack/react-router";
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Download, GraduationCap, Linkedin, Mail, MapPin, Menu, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studio from '@/assets/gemini-studio.jpg.asset.json';
import portrait from '@/assets/gemini-portrait.png.asset.json';
import cv from '@/assets/gemini-cv.pdf.asset.json';
import { categories, experiences, filterSkills, type Category } from '@/lib/cv-data';

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Gemini CHINASAMY — Audit Manager & Expert Stratégie Sinistres IARD' },
    { name: 'description', content: 'Le parcours de Gemini CHINASAMY : audit, maîtrise des risques, conformité réglementaire et stratégie sinistres IARD à Paris.' },
    { property: 'og:title', content: 'Gemini CHINASAMY — Audit, Risques & Assurance' },
    { property: 'og:description', content: 'Audit Manager & Expert Stratégie Sinistres IARD. Découvrez mon parcours, mes expertises et prenons contact.' },
    { property: 'og:type', content: 'profile' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const links = [{ href: '#profil', label: 'Profil' }, { href: '#parcours', label: 'Parcours' }, { href: '#expertises', label: 'Expertises' }, { href: '#formation', label: 'Formation' }];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('Toutes');
  const [openExperience, setOpenExperience] = useState<string | null>('audit-manager');
  const [reverseOrder, setReverseOrder] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const orderedExperiences = reverseOrder ? [...experiences].reverse() : experiences;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('gemini@chinasamy.com');
      setCopied(true); setCopyFailed(false);
      setTimeout(() => setCopied(false), 3000);
    } catch { setCopyFailed(true); }
  }

  return (
    <div className="cv-site">
      <header className="site-header">
        <a href="#profil" className="wordmark" aria-label="Gemini Chinasamy, accueil">GC<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <Button asChild className="header-contact"><a href="#contact">Prenons contact <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav className="mobile-nav" aria-label="Navigation mobile">{[...links, { href: '#contact', label: 'Contact' }].map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>}
      </header>

      <main>
        <section id="profil" className="profile-hero">
          <img className="hero-photo" src={studio.url} alt="Gemini Chinasamy en costume noir et cravate" fetchPriority="high" />
          <div className="hero-content">
            <div className="eyebrow"><span className="small-line" /> AUDIT · RISQUES · ASSURANCE</div>
            <h1>Gemini<br /><span>CHINASAMY</span><span className="name-dot">.</span></h1>
            <h2>Audit Manager & Expert<br />Stratégie Sinistres IARD</h2>
            <p className="hero-description">Une vision stratégique. Une exigence opérationnelle.<br className="desktop-break" /> Au service de la maîtrise des risques.</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href={cv.url} download="Gemini-Chinasamy-CV.pdf"><Download /> Télécharger mon CV</a></Button>
              <Button asChild variant="outline" size="lg"><a href="#parcours">Découvrir mon parcours <ArrowDown /></a></Button>
            </div>
            <div className="hero-location"><MapPin size={14} /><span>Paris et périphérie</span><span className="location-divider" /><a href="https://www.linkedin.com/in/geminichinasamy" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} /></a></div>
          </div>
          <div className="hero-caption"><span>GEMINI CHINASAMY</span><span>Rigueur. Vision. Impact.</span></div>
          <a href="#introduction" className="scroll-cue" aria-label="Découvrir le profil"><ArrowDown size={17} /></a>
        </section>

        <section className="credentials-strip" aria-label="Repères professionnels">
          <div><strong>18<span>+</span></strong><p>années dans l’assurance</p></div>
          <div><strong>Audit & Risques</strong><p>une expertise transversale</p></div>
          <div><strong>France & International</strong><p>un regard sans frontières</p></div>
          <div><ShieldCheck size={27} /><p>Conformité & excellence opérationnelle</p></div>
        </section>

        <section id="introduction" className="section-container introduction">
          <div className="section-label"><span>01 / PROFIL</span><h2>La rigueur de l’audit.<br />La vision du terrain.</h2></div>
          <div className="intro-copy"><p>De la gestion de sinistres complexes au pilotage des audits, mon parcours s’est construit au plus près des réalités de l’assurance.</p><p>Chez Wakam, j’accompagne les partenaires et les équipes dans la maîtrise de leurs risques, le renforcement de leur conformité et l’amélioration de leurs processus. Une approche qui conjugue analyse, exigence et accompagnement du changement.</p><div className="signature">Gemini Chinasamy<span>AUDIT MANAGER</span></div></div>
        </section>

        <section id="parcours" className="experience-section">
          <div className="section-container">
            <div className="section-heading"><div className="section-label"><span>02 / PARCOURS</span><h2>Un parcours, une progression.</h2></div><Button variant="ghost" className="order-button" onClick={() => setReverseOrder(!reverseOrder)}><ArrowDown className={reverseOrder ? 'rotate-180' : ''} />{reverseOrder ? 'Du premier au plus récent' : 'Du plus récent au premier'}</Button></div>
            <div className="timeline">
              {orderedExperiences.map((experience) => {
                const expanded = openExperience === experience.id;
                return <article className={`timeline-item ${expanded ? 'is-expanded' : ''}`} key={experience.id}>
                  <div className="timeline-date"><span>{experience.period}</span>{experience.current && <span className="current-badge"><i /> EN POSTE</span>}</div>
                  <div className="timeline-marker"><span /></div>
                  <div className="experience-content">
                    <Button variant="ghost" className="experience-trigger" aria-expanded={expanded} aria-controls={`details-${experience.id}`} onClick={() => setOpenExperience(expanded ? null : experience.id)}>
                      <span><span className="company">{experience.company}<span className="company-detail">{experience.companyDetail}</span></span><span className="experience-title">{experience.role}</span></span><ChevronDown className={expanded ? 'rotate-180' : ''} />
                    </Button>
                    <p className="experience-summary">{experience.summary}</p>
                    {expanded && <div className="experience-details" id={`details-${experience.id}`}><p className="exact-dates">{experience.dates}</p><ul>{experience.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="experience-tags">{experience.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>}
                  </div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="expertises" className="section-container expertise-section">
          <div className="section-heading"><div className="section-label"><span>03 / EXPERTISES</span><h2>Comprendre. Sécuriser. Transformer.</h2></div><p className="section-aside">Des compétences complémentaires,<br />une même exigence de qualité.</p></div>
          <div className="skill-filters" role="group" aria-label="Catégories de compétences">{categories.map(category => <Button key={category} variant={activeCategory === category ? 'default' : 'ghost'} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</Button>)}</div>
          <div className="skills-grid" aria-live="polite">{filterSkills(activeCategory).map(skill => <div className="skill-item" key={skill.name}><Check size={16} /><span>{skill.name}</span><ArrowUpRight size={14} /></div>)}</div>
          <div className="expertise-note"><ShieldCheck size={19} /><span>Une expertise assurantielle ancrée dans la pratique, de l’analyse des dossiers à la gouvernance des risques.</span></div>
        </section>

        <section id="formation" className="education-section"><div className="section-container education-layout">
          <div><div className="section-label"><span>04 / FORMATION</span><h2>Des bases solides.</h2></div><div className="education-item"><GraduationCap /><div><span className="education-year">2006 — 2007</span><h3>BTS Management des Unités Commerciales</h3><p>IFCV · Levallois-Perret</p></div></div><div className="education-item"><GraduationCap /><div><span className="education-year">2003 — 2005</span><h3>Bac STT Commerce / Communication</h3><p>Lycée Jacques Brel</p></div></div></div>
          <div className="languages"><div className="section-label"><span>LANGUES</span><h2>Un horizon international.</h2></div>{[{ name: 'Français', level: 'Natif', className: 'native' }, { name: 'Anglais', level: 'Bilingue', className: 'bilingual' }, { name: 'Espagnol', level: 'Compétence professionnelle limitée', className: 'working' }].map(language => <div className="language-item" key={language.name}><div><strong>{language.name}</strong><span>{language.level}</span></div><div className={`language-meter ${language.className}`}><i /><i /><i /><i /><i /></div></div>)}</div>
        </div></section>

        <section id="contact" className="contact-section"><div className="section-container contact-layout"><div><span className="contact-eyebrow">05 / CONTACT</span><h2>Échangeons sur<br />vos enjeux<span>.</span></h2><p>Audit, conformité, stratégie sinistres.<br />Les conversations qui font avancer commencent ici.</p><Button asChild size="lg"><a href="mailto:gemini@chinasamy.com">Envoyer un message <ArrowUpRight /></a></Button></div><div className="contact-details"><div className="contact-person"><img src={portrait.url} alt="Portrait de Gemini Chinasamy" loading="lazy" /><div><strong>Gemini CHINASAMY</strong><span>Audit Manager & Expert IARD</span></div></div><a href="mailto:gemini@chinasamy.com" className="contact-link"><Mail /><span>gemini@chinasamy.com</span><ArrowUpRight /></a><a href="mailto:gemini@veerasawmy.net" className="contact-link"><Mail /><span>gemini@veerasawmy.net</span><ArrowUpRight /></a><a href="https://www.linkedin.com/in/geminichinasamy" target="_blank" rel="noopener noreferrer" className="contact-link"><Linkedin /><span>Retrouvons-nous sur LinkedIn</span><ArrowUpRight /></a><div className="contact-bottom"><span><MapPin size={14} /> Paris et périphérie</span><Button variant="ghost" size="sm" onClick={copyEmail}>{copied ? <><Check /> Adresse copiée</> : 'Copier l’adresse e-mail'}</Button></div>{copyFailed && <p role="alert" className="copy-error">Copie indisponible. Adresse : gemini@chinasamy.com</p>}</div></div></section>
      </main>
      <footer className="site-footer"><a href="#profil" className="wordmark">GC<span>.</span></a><span>© {new Date().getFullYear()} Gemini CHINASAMY</span><a href="#profil">Retour en haut <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
