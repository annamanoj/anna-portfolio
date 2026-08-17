import "../styles/hero.css";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="hero" id="about">

      <div className="hero-left">

        <p className="availability">
          Open to Graduate Opportunities
        </p>

        <h1 className="hero-name">
          Anna Manoj
        </h1>

        <h2 className="hero-title">
          Graduate Information Technology Professional
        </h2>

        <p className="hero-description">
          Passionate about building practical software solutions using modern
          technologies. Interested in Software Engineering, Cloud Computing,
          AI, Full Stack Development and IT Support.
        </p>

       <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
        >
            
        Download Resume
        </a>

        <div className="stats">

          <div className="stat">
            <h3>6+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>15+</h3>
            <p>Technologies</p>
          </div>

          <div className="stat">
            <h3>2025</h3>
            <p>RMIT Graduate</p>
          </div>

        </div>

      </div>

      <HeroImage />

    </section>
  );
}

export default Hero;