import { FaTimes } from "react-icons/fa";

function EducationModal({ education, onClose }) {

  if (!education) return null;

  return (

    <div
      className="education-modal"
      onClick={onClose}
    >

      <div
        className="education-modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="education-close"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>


        {/* Header */}

        <div className="education-modal-header">

          <span className="education-modal-period">
            {education.period}
          </span>

          <h1>
            {education.degree}
          </h1>

          {education.specialization && (

            <h2>
              {education.specialization}
            </h2>

          )}

          <p className="education-modal-institution">
            {education.institution}
          </p>

          {education.shortInstitution && (

            <span className="education-modal-short-name">
              {education.shortInstitution}
            </span>

          )}

          <p className="education-modal-location">
            {education.location}
          </p>

        </div>


        {/* Overview */}

        <section className="education-modal-section">

          <h3>
            Overview
          </h3>

          <p>
            {education.overview}
          </p>

        </section>


        {/* Subjects */}

        <section className="education-modal-section">

          <h3>
            Subjects Completed
          </h3>


          <div className="subject-groups">

            {Object.entries(education.subjects).map(
              ([category, subjects]) => (

                <div
                  className="subject-group"
                  key={category}
                >

                  <h4>
                    {category}
                  </h4>


                  <ul>

                    {subjects.map((subject) => (

                      <li key={subject}>
                        {subject}
                      </li>

                    ))}

                  </ul>

                </div>

              )
            )}

          </div>

        </section>


        {/* Academic Experience */}

        <section className="education-modal-section">

          <h3>
            Academic Experience
          </h3>


          <ul className="experience-list">

            {education.experience.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>

              )
            )}

          </ul>

        </section>


        {/* Areas */}

        <section className="education-modal-section">

          <h3>
            Key Areas
          </h3>


          <div className="education-area-list">

            {education.areas.map((area) => (

              <span key={area}>
                {area}
              </span>

            ))}

          </div>

        </section>


      </div>

    </div>

  );
}

export default EducationModal;