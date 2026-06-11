import CertificateCarousel, { type CertificateItem } from "./CertificateCarousel";
import RecommendationPicker from "./RecommendationPicker";
import StreamingText from "./StreamingText";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/badri-narayana-kancharla" },
  { label: "GitHub", href: "https://github.com/Badri467" },
  { label: "LeetCode", href: "https://leetcode.com/u/Badri_Narayana/" },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=badrinarayana467%40gmail.com" },
];

const metrics = [
  { value: "9.55", label: "GPA / 10.0" },
  { value: "OS", label: "Open-source contributions", href: "https://github.com/Badri467" },
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
  {
    name: "Intelligent Pavement Damage Detection",
    date: "May 2025",
    stack: "Python, YOLOv8, CBAM, OpenCV",
    href: "https://github.com/Badri467/RoadDamage",
    summary:
      "A real-time computer vision pipeline for detecting pavement defects across diverse road conditions.",
    points: [
      "Enhanced YOLOv8 with a lightweight CBAM attention mechanism, improving feature extraction and increasing mAP@50 by 3.8% over the baseline model.",
      "Built a pavement defect detection and reporting flow for potholes, cracks, and surface damage.",
    ],
    accent: "violet",
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

const certifications: CertificateItem[] = [
  {
    date: "Oracle",
    href: "/certificates/oci-ai-foundations.pdf",
    issuer: "Oracle Cloud Infrastructure",
    name: "OCI AI Foundations Associate",
    tag: "Cloud AI",
  },
  {
    date: "Jun-Jul 2024",
    href: "/certificates/edunet-ai-cloud-internship.pdf",
    issuer: "IBM SkillsBuild + Edunet Foundation",
    name: "AI & Cloud Technology Virtual Internship",
    tag: "Internship",
  },
  {
    date: "Jul 2025",
    href: "/certificates/ibm-ai-basics.pdf",
    issuer: "IBM SkillsBuild",
    name: "Getting Started with Artificial Intelligence",
    tag: "AI",
  },
  {
    date: "Jul 2025",
    href: "/certificates/ibm-journey-to-cloud.pdf",
    issuer: "IBM SkillsBuild",
    name: "Journey to Cloud: Envisioning Your Solution",
    tag: "Cloud",
  },
  {
    date: "Jan-Apr 2024",
    href: "/certificates/nptel-programming-in-java.pdf",
    issuer: "NPTEL",
    name: "Programming in Java - Top 1%",
    tag: "Java",
  },
  {
    date: "Jul-Oct 2023",
    href: "/certificates/nptel-joy-of-computing-python.pdf",
    issuer: "NPTEL",
    name: "The Joy of Computing Using Python - Top 1%",
    tag: "Python",
  },
  {
    date: "Oracle",
    href: "/certificates/oracle-dev-gym-databases-foundations.pdf",
    issuer: "Oracle Dev Gym",
    name: "Databases for Developers: Foundations",
    tag: "Database",
  },
  {
    date: "Jan 2024",
    href: "/certificates/ccna-introduction-to-networks.pdf",
    issuer: "Cisco Networking Academy",
    name: "CCNAv7: Introduction to Networks",
    tag: "Networking",
  },
  {
    date: "2024-25",
    href: "/certificates/dsac-web-development-leadership.pdf",
    issuer: "DSAC IT, Vasavi College of Engineering",
    name: "Web Development Leadership",
    tag: "Leadership",
  },
];

const achievements = [
  {
    date: "First year",
    href: "/achievements/first-year-merit.pdf",
    name: "Academic Excellence Merit Certificate",
    summary: "Recognized for academic performance in the first year of engineering.",
    tag: "Merit",
  },
  {
    date: "Second year",
    href: "/achievements/second-year-merit.pdf",
    name: "Academic Excellence Merit Certificate",
    summary: "Recognized for academic performance in the second year of engineering.",
    tag: "Merit",
  },
  {
    date: "Competition",
    href: "/achievements/codezee-third-place.pdf",
    name: "Codezee - 3rd Place",
    summary: "Secured 3rd place in Codezee.",
    tag: "Coding",
  },
  {
    date: "Competition",
    name: "Krithomedh - 5th Place",
    summary: "Secured 5th place in Krithomedh.",
    tag: "Contest",
  },
  {
    date: "Ongoing",
    name: "400+ Problems Solved",
    summary: "CodeChef 2-Star with 400+ problems solved across LeetCode and CodeChef.",
    tag: "DSA",
  },
];

const interests = [
  {
    name: "Reading comics",
    summary:
      "I enjoy visual storytelling, panel pacing, and character-driven worldbuilding.",
    tag: "Stories",
  },
  {
    name: "Watching anime",
    summary:
      "I like anime for its sharp visual style, long-form arcs, and imaginative systems.",
    tag: "Worlds",
  },
];

const manhwaRecommendations = [
  "Revenge of the Iron-Blooded Sword Hound",
  "Absolute Sword Sense",
  "Star-Embracing Swordmaster",
  "The Regressed Mercenary's Machinations",
  "Return of the Mount Hua Sect",
  "Nano Machine",
  "Reformation of the Deadbeat Noble",
  "The Extra's Academy Survival Guide",
  "Swordmaster's Youngest Son",
  "Standard of Reincarnation",
  "Goblin Knight",
  "Heavenly Demon Can't Live a Normal Life",
  "Solo Max-Level Newbie",
  "Regressor Instruction Manual",
  "Academy's Genius Swordmaster",
  "Legend of the Reincarnated Demon God",
  "Myst, Might, Mayhem",
  "The Regressed Son of a Duke is an Assassin",
  "Terminally-Ill Genius Dark Knight",
  "Overpowered Sword",
  "Dungeon Odyssey",
  "I Killed an Academy Player",
  "Necromancer's Evolutionary Traits",
  "Talent-Swallowing Magician",
  "Kill the Dragon",
  "My Daughter is the Final Boss",
  "Damn Reincarnation",
];

const animeRecommendations = [
  "Demon Slayer",
  "Death Note",
  "Naruto",
  "One Piece",
  "Black Clover",
  "Attack on Titan",
  "Dragon Ball Z",
  "Kaguya-sama: Love Is War",
  "Bleach",
  "Inazuma Eleven",
  "Spy x Family",
  "My Hero Academia",
  "That Time I Got Reincarnated as a Slime",
  "The God of High School",
  "Tokyo Ghoul",
  "The Rising of the Shield Hero",
  "The Seven Deadly Sins",
  "Hyouka",
  "Blue Lock",
  "Kaiju No. 8",
  "Wind Breaker",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Badri Narayana home">
          BNK
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#interests">Interests</a>
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
            <a className="secondary-action" href="#contact">
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
        <article className="timeline-card">
          <div>
            <p className="role-date">Jun 2024 - Jul 2024</p>
            <h3>AI & Cloud Technology Virtual Internship</h3>
            <p className="company">IBM SkillsBuild + Edunet Foundation</p>
          </div>
          <ul>
            <li>
              Gained hands-on experience deploying machine learning models on IBM
              Cloud infrastructure.
            </li>
            <li>
              Completed certified learning in artificial intelligence and cloud
              computing through IBM SkillsBuild.
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
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer">
                  View source
                </a>
              ) : null}
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

      <section id="proof" className="section-shell education-section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2 className="stream-text">Academic foundation and proof of learning.</h2>
        </div>
        <article className="education-card">
          <p className="eyebrow">Education</p>
          <h2>Vasavi College of Engineering</h2>
          <p>BE in Information Technology, 2022 - 2026</p>
          <strong>GPA 9.55 / 10.0</strong>
        </article>
      </section>

      <section id="certifications" className="section-shell credential-section">
        <div className="section-heading wide">
          <p className="eyebrow">Certifications</p>
          <h2 className="stream-text">Credentials across AI, cloud, databases, Java, Python, and networking.</h2>
        </div>
        <div className="certification-panel">
          <CertificateCarousel items={certifications} />
        </div>
      </section>

      <section id="achievements" className="section-shell achievement-section">
        <div className="section-heading wide">
          <p className="eyebrow">Achievements</p>
          <h2 className="stream-text">Academic recognition, contests, and consistent problem solving.</h2>
        </div>
        <div className="achievement-grid">
          {achievements.map((item) => (
            <article className="achievement-card" key={item.name + item.date}>
              <div className="achievement-card__top">
                <span>{item.tag}</span>
                <span>{item.date}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              {item.href ? (
                <a
                  aria-label={`Open ${item.name} certificate`}
                  className="achievement-card__action"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open certificate
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="interests" className="section-shell interests-section">
        <div className="section-heading wide">
          <p className="eyebrow">Interests</p>
          <h2 className="stream-text">Outside code, I follow visual stories and imaginative worlds.</h2>
        </div>
        <div className="interest-grid">
          {interests.map((item) => (
            <article className="interest-card" key={item.name}>
              <span>{item.tag}</span>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="recommender-grid">
          <RecommendationPicker
            eyebrow="Manhwa roulette"
            items={manhwaRecommendations}
            prompt="Want a manhwa recommendation from me?"
            title="manhwa"
          />
          <RecommendationPicker
            eyebrow="Anime roulette"
            items={animeRecommendations}
            prompt="Want an anime recommendation from me?"
            title="anime"
          />
        </div>
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
