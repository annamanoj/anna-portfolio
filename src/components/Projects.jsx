import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";
import ProjectModal from "./ProjectModal";

function Projects() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject,setSelectedProject]=useState(null);

  const categories = [
    "All",
    "Industry",
    "Mobile",
    "AI",
    "Cloud",
    "Web"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="projects" id="projects">

      <h2>Featured Projects</h2>

      <p className="projects-intro">
        A collection of industry collaborations,
        academic work and software projects built
        throughout my learning journey.
      </p>

      <div className="filter-buttons">

        {categories.map((category) => (

          <button
            key={category}
            className={
              selectedCategory === category
                ? "active-filter"
                : ""
            }
            onClick={() =>
              setSelectedCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>

      <div className="projects-grid">

        {filteredProjects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />

        ))}

      </div>

      <ProjectModal

    project={selectedProject}

    onClose={() => setSelectedProject(null)}

/>


    </section>
  );
}

export default Projects;