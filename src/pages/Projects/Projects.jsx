import "./Projects.css";
import Project from "../../components/Project";

function Projects() {
  return (
    <section className="projects-section">
      <div className="portfolio-container">
        <div className="projects-header-container">
          <h2 className="projects-header">Projects</h2>
          <p className="projects-description">
            My portfolio showcases a range of projects that blend creativity and
            technical expertise. From sleek, responsive websites to dynamic web
            apps, each piece reflects my passion for clean code and user-focused
            design.
          </p>
        </div>
        <div className="projects-container">
          <div className="arrows-container"></div>
          <div className="projects"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
