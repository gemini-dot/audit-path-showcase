import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Download, GraduationCap, Linkedin, Mail, MapPin, Menu, ShieldCheck, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studio from '@/assets/gemini-studio.jpg.asset.json';
import portrait from '@/assets/gemini-portrait.png.asset.json';
import cv from '@/assets/gemini-cv.pdf.asset.json';
import { categories, getExperiences, getSkills, cvCopy, englishCategories, contactEmail, type Category, type Language } from '@/lib/cv-data';
import { getCvHead } from '@/lib/cv-seo';

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { lang?: Language } => ({ lang: search['lang'] === 'en' ? 'en' : 'fr' }),
  head: ({ match }) => getCvHead(match.search.lang ?? 'fr'),
  component: Index,
});

const sectionIds = ['profil', 'parcours', 'expertises', 'formation'];

function Index() {
  const { lang = 'fr' } = Route.useSearch();
  const t = cvCopy[lang];
  const hash = useLocation({ select: location => location.hash });
  const links = sectionIds.map((id, index) => ({ href: `#${id}`, label: t.nav[index] }));
  const experiences = getExperiences(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('Toutes');
  const [openExperience, setOpenExperience] = useState<string | null>('audit-manager');
  const [reverseOrder, setReverseOrder] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const orderedExperiences = reverseOrder ? [...experiences].reverse() : experiences;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true); setCopyFailed(false);
      setTimeout(() => setCopied(false), 3000);
    } catch { setCopyFailed(true); }
  }

  return (
    <div className="cv-site">
      <header className="site-header">
        <a href="#profil" className="wordmark" aria-label={t.home}>GC<span>.</span></a>
        <nav className="desktop-nav" aria-label={t.mainNav}>
          {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="language-switch" role="group" aria-label={lang === 'fr' ? 'Langue du CV' : 'CV language'}>
          {(['fr', 'en'] as const).map(language => <Button asChild key={language} variant="ghost" size="sm" className={lang === language ? 'is-active' : ''}><Link to="/" search={{ lang: language }} hash={hash} resetScroll={false} aria-label={language === 'fr' ? 'Français' : 'English'} aria-current={lang === language ? 'true' : undefined} lang={language}>{language.toUpperCase()}</Link></Button>)}
        </div>
        <Button asChild className="header-contact"><a href="#contact">{t.contact} <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.closeMenu : t.openMenu} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
        {menuOpen && <nav className="mobile-nav" aria-label={t.mobileNav}>{[...links, { href: '#contact', label: 'Contact' }].map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>}
      </header>

      <main>
        <section id="profil" className="profile-hero">
          <img className="hero-photo" src={studio.url} alt={t.photoAlt} fetchPriority="high" />
          <div className="hero-content">
            <div className="eyebrow"><span className="small-line" /> {t.eyebrow}</div>
            <h1>Gemini<br /><span>CHINASAMY</span><span className="name-dot">.</span></h1>
            <h2>{t.role[0]}<br />{t.role[1]}</h2>
            <p className="hero-description">{t.heroDescription[0]}<br className="desktop-break" /> {t.heroDescription[1]}</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href={cv.url} download="Gemini-Chinasamy-CV.pdf"><Download /> {t.download}</a></Button>
              <Button asChild variant="outline" size="lg"><a href="#parcours">{t.discover} <ArrowDown /></a></Button>
            </div>
            <div className="hero-location"><MapPin size={14} /><span>{t.location}</span><span className="location-divider" /><a href="https://www.linkedin.com/in/geminichinasamy" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} /></a></div>
          </div>
          <div className="hero-caption"><span>GEMINI CHINASAMY</span><span>{t.caption}</span></div>
          <a href="#introduction" className="scroll-cue" aria-label={t.discoverProfile}><ArrowDown size={17} /></a>
        </section>

        <section className="credentials-strip" aria-label={t.credentialsLabel}>
          <div><strong>18<span>+</span></strong><p>{t.years}</p></div>
          <div><strong>{t.auditRisk}</strong><p>{t.transversal}</p></div>
          <div><strong>{t.international}</strong><p>{t.borders}</p></div>
          <div><ShieldCheck size={27} /><p>{t.excellence}</p></div>
        </section>

        <section id="introduction" className="section-container introduction">
          <div className="section-label"><span>{t.profileLabel}</span><h2>{t.profileHeading[0]}<br />{t.profileHeading[1]}</h2></div>
          <div className="intro-copy"><p>{t.intro[0]}</p><p>{t.intro[1]}</p><div className="signature">Gemini Chinasamy<span>AUDIT MANAGER</span></div></div>
        </section>

        <section id="parcours" className="experience-section">
          <div className="section-container">
            <div className="section-heading"><div className="section-label"><span>{t.careerLabel}</span><h2>{t.careerHeading}</h2></div><Button variant="ghost" className="order-button" onClick={() => setReverseOrder(!reverseOrder)}><ArrowDown className={reverseOrder ? 'rotate-180' : ''} />{reverseOrder ? t.oldest : t.newest}</Button></div>
            <div className="timeline">
              {orderedExperiences.map((experience) => {
                const expanded = openExperience === experience.id;
                return <article className={`timeline-item ${expanded ? 'is-expanded' : ''}`} key={experience.id}>
                  <div className="timeline-date"><span>{experience.period}</span>{experience.current && <span className="current-badge"><i /> {t.current}</span>}</div>
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
          <div className="section-heading"><div className="section-label"><span>{t.expertiseLabel}</span><h2>{t.expertiseHeading}</h2></div><p className="section-aside">{t.expertiseAside[0]}<br />{t.expertiseAside[1]}</p></div>
          <div className="skill-filters" role="group" aria-label={t.categoriesLabel}>{categories.map(category => <Button key={category} variant={activeCategory === category ? 'default' : 'ghost'} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{lang === 'en' ? englishCategories[category] : category}</Button>)}</div>
          <div className="skills-grid" aria-live="polite">{getSkills(activeCategory, lang).map(skill => <div className="skill-item" key={skill.name}><Check size={16} /><span>{skill.name}</span><ArrowUpRight size={14} /></div>)}</div>
          <div className="expertise-note"><ShieldCheck size={19} /><span>{t.expertiseNote}</span></div>
        </section>

        <section id="formation" className="education-section"><div className="section-container education-layout">
          <div><div className="section-label"><span>{t.educationLabel}</span><h2>{t.educationHeading}</h2></div><div className="education-item"><GraduationCap /><div><span className="education-year">2006 — 2007</span><h3>{t.education[0]}</h3><p>IFCV · Levallois-Perret</p></div></div><div className="education-item"><GraduationCap /><div><span className="education-year">2003 — 2005</span><h3>{t.education[1]}</h3><p>{t.school}</p></div></div></div>
          <div className="languages"><div className="section-label"><span>{t.languagesLabel}</span><h2>{t.languagesHeading}</h2></div>{t.languages.map(language => <div className="language-item" key={language.name}><div><strong>{language.name}</strong><span>{language.level}</span></div><div className={`language-meter ${language.className}`}><i /><i /><i /><i /><i /></div></div>)}</div>
        </div></section>

        <section id="contact" className="contact-section"><div className="section-container contact-layout"><div><span className="contact-eyebrow">{t.contactLabel}</span><h2>{t.contactHeading[0]}<br />{t.contactHeading[1]}<span>.</span></h2><p>{t.contactDescription[0]}<br />{t.contactDescription[1]}</p><Button asChild size="lg"><a href={`mailto:${contactEmail}`}>{t.message} <ArrowUpRight /></a></Button></div><div className="contact-details"><div className="contact-person"><img src={portrait.url} alt={t.portraitAlt} loading="lazy" /><div><strong>Gemini CHINASAMY</strong><span>{t.shortRole}</span></div></div><a href={`mailto:${contactEmail}`} className="contact-link"><Mail /><span>{contactEmail}</span><ArrowUpRight /></a><a href="https://www.linkedin.com/in/geminichinasamy" target="_blank" rel="noopener noreferrer" className="contact-link"><Linkedin /><span>{t.linkedin}</span><ArrowUpRight /></a><div className="contact-bottom"><span><MapPin size={14} /> {t.location}</span><Button variant="ghost" size="sm" onClick={copyEmail}>{copied ? <><Check /> {t.copied}</> : t.copy}</Button></div>{copyFailed && <p role="alert" className="copy-error">{t.copyError} {contactEmail}</p>}</div></div></section>
      </main>
      <footer className="site-footer"><a href="#profil" className="wordmark">GC<span>.</span></a><span>© {new Date().getFullYear()} Gemini CHINASAMY</span><a href="#profil">{t.top} <ArrowUpRight size={14} /></a></footer>
    </div>
  );
}
