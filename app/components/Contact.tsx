import { profile, socialLinks } from "../content";
import { Reveal } from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <Reveal>
          <div className="footer__grid">
            <div>
              <p className="eyebrow">Connect</p>
              <h2 style={{ marginTop: 18 }}>
                Have a backend, AI, or product problem worth building?
              </h2>
              <p>
                I&apos;m based in {profile.location} and looking for software engineering
                roles where backend systems, AI workflows, and polished user experiences
                intersect.
              </p>
            </div>
            <div className="footer__links">
              {socialLinks.map((link) => (
                <MagneticButton
                  key={link.href}
                  href={link.href}
                  className="btn"
                  external={link.href.startsWith("http")}
                  strength={0.2}
                >
                  {link.label}
                </MagneticButton>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Badri Narayana Kancharla</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
