 import { FaTimes } from "react-icons/fa";

function AchievementModal({ achievement, onClose }) {

  if (!achievement) return null;

  return (
    <div
      className="project-modal"
      onClick={onClose}
    >
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="close-modal"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <img
          src={achievement.hero || achievement.image}
          alt={achievement.title}
          className="modal-image"
        />

        <span className="project-category">
          {achievement.title}
        </span>

        <h1>{achievement.subtitle}</h1>

        <p className="modal-year">
          {achievement.year}
        </p>

        {/* Overview */}

        {(achievement.overview || achievement.description) && (
          <section>

            <h2>Overview</h2>

            <p>
              {achievement.overview || achievement.description}
            </p>

          </section>
        )}

        {/* Innovation Challenge / Featured Project */}

        {achievement.project && (
          <section>

            <h2>Innovation Challenge</h2>

            <h3>{achievement.project.title}</h3>

            <p>
              {achievement.project.description}
            </p>

          </section>
        )}

        {/* Project Highlights */}

        {achievement.highlights && (
          <section>

            <h2>Project Highlights</h2>

            <ul>
              {achievement.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </section>
        )}

        {/* Contributions */}

        {achievement.responsibilities && (
          <section>

            <h2>My Contributions</h2>

            <ul>
              {achievement.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </section>
        )}

        {/* Technologies */}

        {achievement.technologies && (
          <section>

            <h2>Technologies</h2>

            <div className="modal-tech">
              {achievement.technologies.map((tech, index) => (
                <span key={index}>
                  {tech}
                </span>
              ))}
            </div>

          </section>
        )}

        {/* Outcome */}

        {achievement.outcome && (
          <section>

            <h2>Outcome</h2>

            <p>
              {achievement.outcome}
            </p>

          </section>
        )}

        {/* Reflection */}

        {achievement.reflection && (
          <section>

            <h2>Reflection</h2>

            <p>
              {achievement.reflection}
            </p>

          </section>
        )}

        {/* Summary */}

        {achievement.info && (
          <section>

            <h2>Program Summary</h2>

            <div className="project-info-grid">

              {Object.entries(achievement.info).map(([key, value]) => (

                <div
                  className="project-info-card"
                  key={key}
                >
                  <h4>{key}</h4>
                  <p>{value}</p>
                </div>

              ))}

            </div>

          </section>
        )}

        {/* Certifications */}

{achievement.certificates && (
  <section>

    <h2>Professional Certifications</h2>

    <div className="certification-list">

      {achievement.certificates.map((certificate, index) => (

        <div
          className="certification-card"
          key={index}
        >

          <img
            src={certificate.logo}
            alt={certificate.title}
            className="certification-logo"
          />

          <div className="certification-content">

            <h3>{certificate.title}</h3>

            <p className="certification-provider">
              {certificate.provider}
            </p>

            <p className="certification-description">
        {certificate.description}
    </p>

            <div className="certification-skills">

              {certificate.skills.map((skill, i) => (

                <span key={i}>
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>

      ))}

    </div>

  </section>
)}

      </div>
    </div>
  );
}

export default AchievementModal;