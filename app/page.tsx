import StreamingText from "./StreamingText";
import TextShimmerFollow from "./TextShimmerFollow";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/badri-narayana-kancharla" },
  { label: "GitHub", href: "https://github.com/Badri467" },
  { label: "LeetCode", href: "https://leetcode.com/u/Badri467/" },
  { label: "Email", href: "mailto:badrinarayana467@gmail.com" },
];

const metrics = [
  { value: "9.55", label: "GPA / 10.0" },
  { value: "OSS", label: "Open-source contributions", href: "https://github.com/Badri467" },
  { value: "400+", label: "Problems solved on LeetCode and CodeChef" },
];

const projects = [
  {
    name: "IT Incident Summarizer",
    date: "Jun 2025",
    stack: "React.js, Flask, RAG, ML, River",
    href: "https://github.com/Badri467/IT_Incident_Summariser",
    summary:
      "A reliability tool for SRE teams that compresses noisy incident logs into concise summaries and predicts root causes with an adaptive online model.",
    points: [
      "Built a hybrid RAG pipeline for high-volume, evolving incident data.",
      "Integrated feedback learning that outperformed static XGBoost and Decision Tree baselines.",
    ],
    accent: "aqua",
  },
  {
    name: "DubFlow",
    date: "Jun 2025",
    stack: "React.js, Node.js, Express, gTTS, FFmpeg",
    href: "https://github.com/Badri467/DubFlow/tree/main",
    summary:
      "A multilingual YouTube dubbing pipeline that turns transcripts into distributed audio processing jobs with resilient translation and transcript fallbacks.",
    points: [
      "Supported dubbing workflows across 32+ languages.",
      "Added recovery paths for missing transcripts and translation failures.",
    ],
    accent: "amber",
  },
  {
    name: "Smart Offers AI Agent",
    date: "Oracle Internship",
    stack: "Signals, recommendations, e-commerce AI",
    href: "https://github.com/Badri467",
    summary:
      "A behavior-aware offers engine that converts customer signals into personalized commerce recommendations and campaign logic.",
    points: [
      "Mapped shopper behavior, product context, and targeting rules into explainable offer decisions.",
      "Designed for practical campaign delivery, debugging, and measurable customer impact.",
    ],
    accent: "coral",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Java", "Python", "JavaScript", "C", "HTML/CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Spring Boot", "Node.js", "Express.js", "Flask", "REST APIs", "React.js"],
  },
  {
    title: "Data & Storage",
    skills: ["SQL", "MySQL", "MongoDB", "DBMS", "ETL", "Data Validation"],
  },
  {
    title: "Infrastructure",
    skills: ["Kubernetes", "Docker", "CI/CD", "Git", "Prometheus", "Log Monitoring"],
  },
];

const certifications = [
  { name: "OCI AI Foundations Associate", href: "" },
  { name: "NPTEL Programming in Java - Top 1%", href: "" },
  { name: "NPTEL The Joy of Using Python - Top 1%", href: "" },
  { name: "Oracle Dev Gym", href: "" },
  { name: "CCNAv7: Introduction to Networks", href: "" },
];

const achievements = [
  "Merit certificates for academic excellence in first and second year.",
  "Codezee 3rd place and Krithomedh 5th place.",
  "CodeChef 2-Star with 400+ problems solved across LeetCode and CodeChef.",
];

export default function Home() {
  return (
    <main>
      <TextShimmerFollow />
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Badri Narayana home">
          BNK
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="signal-field" aria-hidden="true">
          <span className="trace trace-1" />
          <span className="trace trace-2" />
          <span className="trace trace-3" />
          <span className="trace trace-4" />
          <span className="node node-1" />
          <span className="node node-2" />
          <span className="node node-3" />
          <span className="node node-4" />
        </div>
        <div className="hero-content">
          <h1 className="reveal delay-1">Badri Narayana Kancharla</h1>
          <StreamingText
            className="hero-copy reveal delay-2"
            text="My interests are building AI-powered products, backend systems, and production-ready software that turns complex ideas into reliable user experiences."
          />
          <div className="hero-actions reveal delay-3">
            <a className="primary-action" href="#projects">
              Explore projects
            </a>
            <a className="secondary-action" href="mailto:badrinarayana467@gmail.com">
              Contact me
            </a>
            <a
              className="secondary-action"
              href="/resume-badri-narayana-kancharla.pdf"
              download
            >
              Download resume
            </a>
          </div>
          <div className="signal-row reveal delay-4" aria-label="Profile highlights">
            <span>Oracle ASE Intern</span>
            <span>BE IT, Vasavi College</span>
            <span>Hyderabad</span>
          </div>
        </div>
      </section>

      <section className="metric-band" aria-label="Portfolio metrics">
        {metrics.map((metric) => (
          metric.href ? (
            <a
              key={metric.label}
              className="metric-card"
              href={metric.href}
              target="_blank"
              rel="noreferrer"
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </a>
          ) : (
            <article key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          )
        ))}
      </section>

      <section id="work" className="section-shell experience-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
        </div>
        <article className="timeline-card">
          <div>
            <p className="role-date">Jan 2026 - Present</p>
            <h3>Associate Software Engineer Intern</h3>
            <p className="company">Oracle</p>
          </div>
          <ul>
            <li>
              Built a secure SMS retargeting service with multiprocessing workers,
              API integrations, rule-based targeting, and campaign observability.
            </li>
            <li>
              Developed REST APIs with caching, retry logic, and structured logging
              to reduce redundant calls and speed incident debugging.
            </li>
            <li>
              Built a Smart Offers AI Agent that converts customer behavior signals
              into personalized e-commerce recommendations.
            </li>
            <li>
              Fixed Fortify findings with parameterized queries and input validation
              to reduce SQL injection and sanitization risk.
            </li>
          </ul>
        </article>
      </section>

      <section id="projects" className="section-shell">
        <div className="section-heading wide">
          <p className="eyebrow">Selected projects</p>
          <h2 className="stream-text">Systems that combine product thinking with backend depth.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-topline">
                <span>{project.date}</span>
                <span>{project.stack}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="stream-text">{project.summary}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a href={project.href} target="_blank" rel="noreferrer">
                View source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <div className="section-heading">
          <p className="eyebrow">Technical range</p>
          <h2 className="stream-text">Comfortable across APIs, data workflows, deployment, and UI.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-cloud">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell proof-section">
        <article>
          <p className="eyebrow">Education</p>
          <h2>Vasavi College of Engineering</h2>
          <p>BE in Information Technology, 2022 - 2026</p>
          <strong>GPA 9.55 / 10.0</strong>
        </article>
        <article>
          <p className="eyebrow">Certifications</p>
          <ul className="certification-list">
            {certifications.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer">
                    View certificate
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <p className="eyebrow">Achievements</p>
          <ul>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Connect</p>
          <h2 className="stream-text">Have a backend, AI, or product engineering problem worth building?</h2>
          <p>
            I am based in Hyderabad and focused on software engineering roles where
            backend systems, AI workflows, and polished user experiences intersect.
          </p>
        </div>
        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
