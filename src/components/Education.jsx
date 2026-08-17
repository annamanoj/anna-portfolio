import { useState } from "react";
import { education } from "../data/education";
import EducationModal from "./EducationModal";
import "../styles/education.css";

function Education() {

  const [selectedEducation, setSelectedEducation] = useState(null);

  return (

    <section
      className="education"
      id="education"
    >

      <h2 className="education-title">
        Education
      </h2>

      <p className="education-intro">
        My academic journey has given me a strong foundation in
        software development, information technology, computer science,
        data, cloud computing and artificial intelligence.
      </p>


      <div className="education-grid">

        {education.map((item) => (

          <div
            className="education-card"
            key={item.id}
          >

            <div className="education-image-container">

              <img
                src={item.image}
                alt={item.institution}
                className="education-image"
              />

            </div>


            <div className="education-card-content">

              <span className="education-period">
                {item.period}
              </span>


              <h3>
                {item.degree}
              </h3>


              {item.specialization && (

                <h4>
                  {item.specialization}
                </h4>

              )}


              <p className="education-institution">
                {item.institution}
              </p>


              {item.shortInstitution && (

                <span className="education-short-name">
                  {item.shortInstitution}
                </span>

              )}


              <p className="education-location">
                {item.location}
              </p>


              <p className="education-description">
                {item.shortDescription}
              </p>


              <button
                className="education-button"
                onClick={() =>
                  setSelectedEducation(item)
                }
              >
                View Details →
              </button>

            </div>

          </div>

        ))}

      </div>


      <EducationModal
        education={selectedEducation}
        onClose={() => setSelectedEducation(null)}
      />

    </section>

  );
}

export default Education;