import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import ProjectPanel from "./components/ProjectPanel";
import SectionEyebrow from "./components/SectionEyebrow";
import SignalList from "./components/SignalList";
import {
  capabilitySignals,
  contactLinks,
  narrativeLines,
  projects,
  proofPoints,
  timeline,
} from "./data/portfolio";

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroShift = useTransform(
    scrollYProgress,
    [0, 0.18],
    shouldReduceMotion ? [0, 0] : [0, -80],
  );
  const orbitShift = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [0, 120],
  );

  return (
    <div className="page-shell">
      <motion.div className="ambient ambient-left" style={{ y: orbitShift }} />
      <motion.div className="ambient ambient-right" style={{ y: heroShift }} />

      <header className="site-header">
        <a className="brand" href="#top">
          Nijal Bhanderi
        </a>
        <nav className="top-nav" aria-label="Section navigation">
          <a href="#identity">Identity</a>
          <a href="#selected-work">Work</a>
          <a href="#trajectory">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: heroShift }}
          >
            <span className="hero-kicker">Software engineering, shaped with restraint.</span>
            <h1>
              Building digital systems
              <br />
              that think clearly
              <br />
              before they speak.
            </h1>
            <p className="hero-body">
              A portfolio designed as a point of view, not a résumé dump. Nijal
              Bhanderi works at the intersection of engineering depth, product
              clarity, and calm execution.
            </p>
          </motion.div>

          <motion.div
            className="hero-orbit"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: orbitShift }}
          >
            <div className="orbit-core">
              <p>Builder mindset</p>
              <span>Full-stack / systems / leadership</span>
            </div>
            <div className="orbit-ring orbit-ring-a" />
            <div className="orbit-ring orbit-ring-b" />
            <div className="orbit-node orbit-node-a">clarity</div>
            <div className="orbit-node orbit-node-b">structure</div>
            <div className="orbit-node orbit-node-c">intent</div>
          </motion.div>
        </section>

        <section className="proof-strip" aria-label="Core signals">
          <div className="proof-copy">
            {narrativeLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="proof-grid">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="identity-section" id="identity">
          <div className="section-heading">
            <SectionEyebrow>Identity</SectionEyebrow>
            <h2>
              Not defined by a stack,
              <br />
              but by how the pieces align.
            </h2>
          </div>

          <div className="identity-layout">
            <motion.div
              className="identity-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7 }}
            >
              <p>
                Nijal approaches software as a design problem and a systems
                problem at the same time. The frontend should feel composed. The
                backend should feel inevitable. The product should feel useful
                before it feels impressive.
              </p>
            </motion.div>

            <SignalList items={capabilitySignals} />
          </div>
        </section>

        <section className="projects-section" id="selected-work">
          <div className="section-heading projects-heading">
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2>
              Projects that reveal
              <br />
              how the thinking works.
            </h2>
            <p>
              Each build begins with a practical problem, then turns into a
              study in structure, flow, and product judgment.
            </p>
          </div>

          <div className="projects-stack">
            {projects.map((project, index) => (
              <ProjectPanel key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="capability-section">
          <div className="section-heading">
            <SectionEyebrow>Capabilities</SectionEyebrow>
            <h2>
              Skill, represented as
              <br />
              operating behavior.
            </h2>
          </div>

          <div className="capability-grid">
            <div className="capability-column">
              <span>Builds systems end to end</span>
              <span>Turns ambiguity into clean product structure</span>
              <span>Balances logic with interface sensitivity</span>
            </div>
            <div className="capability-column">
              <span>Comfortable with detail, architecture, and polish</span>
              <span>Leads with composure when stakes rise</span>
              <span>Designs software to be understood, not just used</span>
            </div>
          </div>
        </section>

        <section className="journey-section" id="trajectory">
          <div className="section-heading">
            <SectionEyebrow>Journey</SectionEyebrow>
            <h2>
              The through-line is simple:
              <br />
              depth, responsibility, momentum.
            </h2>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.article
                className="timeline-item"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <span>{item.marker}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-panel">
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2>Open to building work that deserves real thought.</h2>
            <p>
              If you are looking for someone who values product sense as much as
              implementation quality, this is a good place to start.
            </p>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
