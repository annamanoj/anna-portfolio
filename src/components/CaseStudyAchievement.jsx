import { FaTimes } from "react-icons/fa";

function CaseStudyAchievement({ achievement, onClose }) {

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
          src={achievement.hero}
          alt={achievement.title}
          className="modal-image"
        />

        <div className="modal-header">

          <span className="project-category">
            {achievement.title}
          </span>

          <h2>{achievement.subtitle}</h2>

          <p className="modal-year">
            {achievement.year}
          </p>

        </div>

        <section>

          <h3>Overview</h3>

          <p>
            {achievement.overview}
          </p>

        </section>

        <section>

          <h3>What I Did</h3>

          <ul>

            {achievement.responsibilities.map((item,index)=>(

              <li key={index}>
                {item}
              </li>

            ))}

          </ul>

        </section>

        <section>

          <h3>Skills Gained</h3>

          <div className="modal-tech">

            {achievement.skills.map((skill,index)=>(

              <span key={index}>
                {skill}
              </span>

            ))}

          </div>

        </section>

        <section>

          <h3>Reflection</h3>

          <p>

            {achievement.reflection}

          </p>

        </section>

      </div>

    </div>

  );

}

export default CaseStudyAchievement;