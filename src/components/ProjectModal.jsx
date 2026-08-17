import { FaTimes } from "react-icons/fa";

function ProjectModal({ project, onClose }) {

    if (!project) return null;

    return (

        <div
            className="project-modal"
            onClick={onClose}
        >

    <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
    >

    <button className="close-modal" onClick={onClose}>
      ✕
    </button>

    {/* Hero */}

    <img
      src={project.image}
      alt={project.title}
      className="modal-image"
    />

    <div className="modal-header">

      <span className="project-category">
        {project.category}
      </span>

      <h2>{project.title}</h2>

      <p className="modal-subtitle">
        {project.subtitle}
      </p>

    </div>

    {/* Project Information */}

    {project.info && (

      <section>

        <h3>Project Information</h3>

        <div className="project-info">

          {Object.entries(project.info).map(([key, value]) => (

            <div key={key} className="info-card">

              <h5>{key}</h5>

              <p>{value}</p>

            </div>

          ))}

        </div>

      </section>

    )}

    {/* Overview */}

    {project.overview && (

      <section>

        <h3>Project Overview</h3>

        <p>{project.overview}</p>

      </section>

    )}

    {/* Features */}

    {project.features && (

      <section>

        <h3>Key Features</h3>

        <div className="feature-grid">

          {project.features.map((feature, index) => (

            <div
              key={index}
              className="feature-card"
            >
              ✓ {feature}
            </div>

          ))}

        </div>

      </section>

    )}

    {/* Outcome */}

    {project.outcome && (

      <section>

        <h3>Project Outcome</h3>

        <p>{project.outcome}</p>

      </section>

    )}

    {/* Contribution */}

    {project.contribution && (

      <section>

        <h3>My Contribution</h3>

        <ul>

          {project.contribution.map((item, index) => (

            <li key={index}>
              {item}
            </li>

          ))}

        </ul>

      </section>

    )}

    {/* Tech */}

    <section>

      <h3>Technologies Used</h3>

      <div className="modal-tech">

        {project.tech.map((tech, index) => (

          <span key={index}>
            {tech}
          </span>

        ))}

      </div>

    </section>

  </div>

</div>

    );

}

export default ProjectModal;