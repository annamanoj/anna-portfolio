function ProjectCard({ project, onSelect }) {
  return (
    <div className="project-card">

      <div className={`project-badge ${project.category.toLowerCase()}`}>
        {project.category}
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <h3>{project.title}</h3>

      <p className="project-subtitle">
        {project.subtitle}
      </p>

      <p className="project-description">
        {project.shortDescription}
      </p>

      <div className="tech-stack">
        {project.tech.map((tech, index) => (
          <span key={index}>
            {tech}
          </span>
        ))}
      </div>

      <button
        className="project-btn"
        onClick={() => onSelect(project)}
      >
        View Case Study →
      </button>

    </div>
  );
}

export default ProjectCard;