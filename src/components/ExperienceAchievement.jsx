import { FaTimes } from "react-icons/fa";

function ExperienceAchievement({ achievement,onClose }){

    return(

        <div
            className="project-modal"
            onClick={onClose}
        >

            <div
                className="project-modal-content"
                onClick={(e)=>e.stopPropagation()}
            >

                <button
                    className="close-modal"
                    onClick={onClose}
                >
                    <FaTimes/>
                </button>

                <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="experience-logo"
                />

                <h2>{achievement.title}</h2>

                <p className="modal-subtitle">
                    {achievement.subtitle}
                </p>

                <section>

                    <h3>Overview</h3>

                    <p>{achievement.overview}</p>

                </section>

                <section>

                    <h3>Responsibilities</h3>

                    <ul>

                        {achievement.responsibilities.map((item,index)=>(

                            <li key={index}>{item}</li>

                        ))}

                    </ul>

                </section>

                <section>

                    <h3>Skills Developed</h3>

                    <div className="modal-tech">

                        {achievement.skills.map((skill,index)=>(

                            <span key={index}>{skill}</span>

                        ))}

                    </div>

                </section>

            </div>

        </div>

    )

}

export default ExperienceAchievement;