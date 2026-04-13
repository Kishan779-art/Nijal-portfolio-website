import { motion } from "framer-motion";

export default function ProjectPanel({ project, index }) {
  return (
    <motion.article
      className="project-panel"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-surface" style={{ background: project.accent }} />
      <div className="project-header">
        <span className="project-year">{project.year}</span>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
      <div className="project-story">
        <p>
          <span>Challenge</span>
          {project.challenge}
        </p>
        <p>
          <span>Approach</span>
          {project.approach}
        </p>
        <p>
          <span>Outcome</span>
          {project.outcome}
        </p>
      </div>
    </motion.article>
  );
}
