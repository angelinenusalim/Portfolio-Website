import { useEffect, useRef, useState } from "react";
import {
  coursework,
  education,
  experiences,
  additionalWork,
  designCollections,
  profile,
  projects,
  skills,
} from "./data/portfolio";
import type { Project } from "./data/portfolio";
import { Icon } from "./components/Icon";
import { ProjectPreview } from "./components/ProjectPreviews";
import { ProjectDialog } from "./components/ProjectDialog";

const sections = [
  ["projects", "Work"],
  ["about", "About"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

function SectionHeading({
  number,
  title,
  accent,
  children,
}: {
  number: string;
  title: string;
  accent: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {accent}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-note">{children}</p>}
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-10% 0px -55% 0px" },
    );
    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a
          href="#home"
          className="wordmark"
          aria-label="Angeline Nusalim, home"
          onClick={() => setOpen(false)}
        >
          an<span className="wordmark-dot">.</span>
          <img src="/decor/pink-bow.webp" alt="" width="640" height="618" />
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "is-open" : ""}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {sections.map(([id, name]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              aria-current={active === id ? "location" : undefined}
            >
              {name}
              <span />
            </a>
          ))}
          <a href={profile.resume} download className="nav-resume">
            Résumé <Icon name="download" />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [bunnyGreeting, setBunnyGreeting] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    if (
      e.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const rect = e.currentTarget.getBoundingClientRect();
    frame.current?.style.setProperty(
      "--tilt-x",
      `${((e.clientX - rect.left) / rect.width - 0.5) * 4}deg`,
    );
    frame.current?.style.setProperty(
      "--tilt-y",
      `${-((e.clientY - rect.top) / rect.height - 0.5) * 4}deg`,
    );
  };
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="small-dot" /> UNIVERSITY OF WASHINGTON · CLASS OF
          2027
        </p>
        <p className="hero-hello script">hi, i’m</p>
        <h1 id="hero-title">
          Angeline
          <br />
          <span>
            Nusalim<span className="name-period">.</span>
          </span>
        </h1>
        <p className="hero-role">
          Computer Science Student & Software Developer
        </p>
        <p className="hero-intro">
          I’m a CS student at the University of Washington with experience in
          full-stack development, data engineering, and machine learning. I
          enjoy building practical applications and understanding how the
          systems behind them work.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">
            Explore my work <Icon name="diagonal" />
          </a>
          <a href={profile.resume} download className="text-button">
            My résumé <Icon name="download" />
          </a>
        </div>
      </div>
      <div
        className="hero-art"
        onPointerMove={move}
        onPointerLeave={() => {
          frame.current?.style.setProperty("--tilt-x", "0deg");
          frame.current?.style.setProperty("--tilt-y", "0deg");
        }}
      >
        <div className="portrait-frame" ref={frame}>
          <img
            className="frame-bow"
            src="/decor/pink-bow.webp"
            alt=""
            width="640"
            height="618"
          />
          <div className="portrait-inner">
            {profile.portrait ? (
              <img
                className="portrait-photo"
                src={profile.portrait}
                alt="Angeline Nusalim wearing a pink hat beneath cherry blossoms"
                width="750"
                height="1000"
                fetchPriority="high"
              />
            ) : (
              <>
                <span className="portrait-index">
                  A.N. / A WORK IN PROGRESS
                </span>
                <button
                  className="bunny-button"
                  aria-label="Say hello to the bunny"
                  onClick={() => setBunnyGreeting((v) => !v)}
                >
                  <img
                    src="/decor/bunny-resting.webp"
                    alt="Watercolor bunny wearing a pink bow"
                    width="640"
                    height="599"
                    fetchPriority="high"
                  />
                </button>
                <span className="bunny-message script" aria-live="polite">
                  {bunnyGreeting ? "oh, hi there!" : "a photo of me, soon."}
                </span>
                <span className="portrait-placeholder-label">
                  PORTRAIT PLACEHOLDER
                </span>
              </>
            )}
          </div>
          <div className="portrait-caption">
            <span className="script">Angeline Nusalim</span>
            <Icon name="sparkle" />
          </div>
        </div>
        <div className="hero-stamp">
          <span>
            UNIVERSITY OF
            <br />
            WASHINGTON
          </span>
          <strong>2027</strong>
          <span>COMPUTER SCIENCE</span>
        </div>
      </div>
      <div className="hero-bottom">
        <p>
          UNIVERSITY OF WASHINGTON <span>·</span> CLASS OF 2027
        </p>
        <a href="#projects">
          VIEW PROJECTS <Icon name="down" />
        </a>
      </div>
    </section>
  );
}

function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01</span> / SELECTED WORK
            </p>
            <h2 id="projects-heading">
              Selected <em>Projects</em>
            </h2>
          </div>
          <p className="section-note">
            A selection of projects I’ve worked on, from full-stack applications
            to machine learning.
          </p>
        </div>
        <div className="project-list">
          {projects.map((p) => (
            <article
              className={`project-row project-${p.id} reveal`}
              key={p.id}
            >
              <div className="project-visual">
                <ProjectPreview id={p.id} screenshot={p.screenshot} />
              </div>
              <div className="project-copy">
                <div className="project-topline">
                  <span className="project-number">{p.number}</span>
                  <p className="mini-label">{p.category}</p>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tag-list">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button
                    className="text-button case-study-button"
                    onClick={() => onSelect(p)}
                    aria-label={`Read project notes: ${p.title}`}
                  >
                    Project details <Icon name="diagonal" />
                  </button>
                  {p.live && (
                    <a
                      className="live-link"
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="small-dot" /> Live demo{" "}
                      <Icon name="diagonal" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="about-section container"
      aria-labelledby="about-heading"
    >
      <div className="about-art reveal">
        <div className="about-paper">
          <p className="mini-label">ABOUT ME</p>
          <img
            src="/decor/ribbon-books.webp"
            alt=""
            width="640"
            height="583"
            loading="lazy"
          />
          <span>SOFTWARE ENGINEERING · DATA · DESIGN</span>
        </div>
        <img
          className="about-cherries"
          src="/decor/bow-cherries.webp"
          alt=""
          width="583"
          height="640"
          loading="lazy"
        />
      </div>
      <div className="about-copy reveal">
        <p className="eyebrow">
          <span>02</span> / THE PERSON BEHIND THE CODE
        </p>
        <h2 id="about-heading">
          About
          <br />
          <em>Me.</em>
        </h2>
        <p>
          I’m a Computer Science student at the University of Washington,
          graduating in June 2027. My interests include software engineering,
          distributed systems, full-stack development, and machine learning.
        </p>
        <p>
          Through internships and projects, I’ve built web applications, learned
          enterprise data workflows in banking, and developed computer vision
          and fraud classification models. I enjoy understanding how interfaces,
          backend services, and data pipelines work together, then using that
          understanding to build practical, maintainable software.
        </p>
        <p>
          I also lead UI/UX design for ISAUW’s Resource Hub, using Figma
          prototypes to collaborate with developers on responsive, accessible
          interfaces. I bring that focus on usability to my engineering work and
          value clear evaluation, thoughtful debugging, and collaboration.
        </p>
        <div className="about-interests">
          <span>Full-stack development</span>
          <span>Machine learning</span>
          <span>Computer vision</span>
          <span>Distributed systems</span>
          <span>Data engineering</span>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>03</span> / WORK EXPERIENCE
            </p>
            <h2 id="experience-heading">Experience</h2>
          </div>
        </div>
        <div className="timeline">
          {experiences.map((e) => (
            <article className="timeline-entry reveal" key={e.company}>
              <div className="timeline-date">
                <span>{e.date}</span>
                {e.current && <span className="current-badge">CURRENTLY</span>}
              </div>
              <div className="timeline-marker">
                <span />
              </div>
              <div className="timeline-content">
                <div className="experience-title">
                  <h3>{e.company}</h3>
                  <span className="company-initials">{e.short}</span>
                </div>
                <h4>{e.role}</h4>
                <p>{e.description}</p>
                <div className="tag-list">
                  {e.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsEducation() {
  return (
    <section
      id="toolkit"
      className="toolkit-section container"
      aria-label="Technical skills and education"
    >
      <SectionHeading
        number="04"
        title="Technical Skills"
        accent="SKILLS & EDUCATION"
      />
      <div className="skills-grid">
        {skills.map((s, i) => (
          <article className="skill-group reveal" key={s.name}>
            <span className="skill-number">0{i + 1}</span>
            <h3>{s.name}</h3>
            <ul>
              {s.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="education-wrap">
        <div className="education-intro">
          <h3>Education</h3>
          <img
            src="/decor/open-book.webp"
            alt=""
            width="640"
            height="523"
            loading="lazy"
          />
        </div>
        <div className="education-list">
          {education.map((e) => (
            <article className="education-entry" key={e.school}>
              <div>
                <span className="education-monogram">{e.label}</span>
                <div>
                  <h4>{e.school}</h4>
                  <p>{e.degree}</p>
                  <span>{e.date}</span>
                </div>
              </div>
              <p className="gpa">
                <strong>{e.gpa}</strong>
                <span>GPA</span>
              </p>
            </article>
          ))}
          <details className="coursework">
            <summary>
              Relevant coursework <Icon name="down" />
            </summary>
            <div className="tag-list">
              {coursework.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

function AdditionalWork() {
  return (
    <section
      id="additional-work"
      className="additional-section"
      aria-labelledby="additional-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ADDITIONAL WORK</p>
            <h2 id="additional-heading">
              Programming & <em>Design</em>
            </h2>
          </div>
          <p className="section-note">
            Other coursework and design work from my portfolio.
          </p>
        </div>
        <div className="additional-projects">
          {additionalWork.map((work) => (
            <article key={work.title} className="additional-project reveal">
              <p className="mini-label">{work.category}</p>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className="tag-list">
                {work.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="design-collections">
          {designCollections.map((collection) => (
            <details className="design-collection" key={collection.title}>
              <summary>
                <span>{collection.title}</span>
                <span className="collection-count">
                  {collection.images.length} pieces <Icon name="down" />
                </span>
              </summary>
              <p>{collection.description}</p>
              <div className="design-gallery">
                {collection.images.map((item) => (
                  <figure key={item.src}>
                    <a
                      href={item.src}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View full-size ${item.title}`}
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    </a>
                    <figcaption>{item.title}</figcaption>
                  </figure>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copyState, setCopyState] = useState("Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("Copied!");
    } catch {
      emailInput.current?.focus();
      emailInput.current?.select();
      setCopyState("Select and copy below");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("Copy email"), 3500);
  }
  return (
    <section
      id="contact"
      className="contact-section container"
      aria-labelledby="contact-heading"
    >
      <img
        className="contact-bunny"
        src="/decor/bunny-sitting.webp"
        alt=""
        width="510"
        height="640"
        loading="lazy"
      />
      <p className="eyebrow">
        <span>05</span> / CONTACT
      </p>
      <h2 id="contact-heading">
        Get in
        <br />
        <em>Touch</em>
      </h2>
      <p className="contact-description">
        I’m always happy to connect about software engineering opportunities,
        projects, or collaborations.
      </p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
        <Icon name="diagonal" />
      </a>
      <div className="contact-actions">
        <button className="button secondary" onClick={copyEmail}>
          <Icon name={copyState === "Copied!" ? "check" : "copy"} />
          <span aria-live="polite">{copyState}</span>
        </button>
        <a className="text-button" href={profile.resume} download>
          Download résumé <Icon name="download" />
        </a>
      </div>
      {copyState === "Select and copy below" && (
        <input
          ref={emailInput}
          className="email-fallback"
          value={profile.email}
          readOnly
          aria-label="Email address to copy"
        />
      )}
      <div className="contact-socials">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <Icon name="diagonal" />
        </a>
        <span> / </span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <Icon name="diagonal" />
        </a>
        <span> / </span>
        <a href={`mailto:${profile.email}`}>
          Say hello <Icon name="mail" />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = document.querySelectorAll(".reveal");
    // Progressive enhancement: content is visible unless the observer is available.
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      element.classList.add("will-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects onSelect={setSelectedProject} />
        <About />
        <Experience />
        <SkillsEducation />
        <AdditionalWork />
        <Contact />
      </main>
      <footer className="site-footer container">
        <a className="footer-wordmark" href="#home">
          Angeline Nusalim<span>.</span>
        </a>
        <p>Computer Science student at the University of Washington.</p>
        <a href="#home">
          BACK TO TOP <Icon name="up" style={{ display: "none" }} />
          <span aria-hidden="true">↑</span>
        </a>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Angeline Nusalim
        </span>
      </footer>
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
