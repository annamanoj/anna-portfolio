import { skillCategories } from "../data/skills";
import { projects } from "../data/projects";
import "../styles/skills.css";

function Skills() {

  const handleSkillClick = (skillName) => {

    // Find projects that use this skill
    const matchingProjects = projects.filter((project) => {

      const technologies = project.tech || project.technologies || [];

      return technologies.some(
        (technology) =>
          technology.toLowerCase() === skillName.toLowerCase()
      );

    });

    // If no matching project, do nothing
    if (matchingProjects.length === 0) {
      return;
    }

    // Scroll to the first matching project
    const firstProject = document.getElementById(
      `project-${matchingProjects[0].id}`
    );

    if (firstProject) {

      firstProject.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      // Highlight all matching projects
      matchingProjects.forEach((project) => {

        const element = document.getElementById(
          `project-${project.id}`
        );

        if (element) {

          element.classList.remove(
            "skill-project-highlight"
          );

          // Force animation to restart
          void element.offsetWidth;

          element.classList.add(
            "skill-project-highlight"
          );

          setTimeout(() => {

            element.classList.remove(
              "skill-project-highlight"
            );

          }, 1800);

        }

      });

    }

  };


  return (

    <section
      className="skills"
      id="skills"
    >

      <h2 className="skills-title">
        Technical Skills
      </h2>

      <p className="skills-intro">
        Throughout my academic journey, industry collaborations and personal
        projects, I have developed experience across software development,
        artificial intelligence, cloud technologies and modern development
        tools.
      </p>


      <div className="skills-grid">

        {skillCategories.map((category) => (

          <div
            className="skill-category"
            key={category.title}
          >

            <h3>{category.title}</h3>


            <div className="skill-list">

              {category.skills.map((skill) => {

                const Icon = skill.icon;


                return (

                  <button
                    type="button"
                    className="skill-chip skill-clickable"
                    key={skill.name}
                    onClick={() =>
                      handleSkillClick(skill.name)
                    }
                  >

                    <Icon className="skill-icon" />

                    <span>
                      {skill.name}
                    </span>

                  </button>

                );

              })}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Skills;