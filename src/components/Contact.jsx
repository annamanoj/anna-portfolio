import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaFileDownload
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {

  return (

    <section
      className="contact"
      id="contact"
    >

      <h2 className="contact-title">
        Let's Connect
      </h2>

      <p className="contact-intro">
        I'm open to opportunities in software development,
        information technology and emerging areas of technology.
      </p>


      <div className="contact-location">

        <FaMapMarkerAlt />

        <span>
          Melbourne, Victoria, Australia
        </span>

      </div>


      <div className="contact-grid">


    {/* Email */}

        <a
        href="mailto:annamanojau@gmail.com"
        className="contact-card"
        >
        <FaEnvelope className="contact-icon" />

        <h3>Email</h3>

        <p>
            annamanojau@gmail.com
        </p>
        </a>


    {/* LinkedIn */}

        <a
        href="https://www.linkedin.com/in/anna-manoj-682a211aa"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
        >
        <FaLinkedinIn className="contact-icon" />

        <h3>LinkedIn</h3>

        <p>
            Professional Profile
        </p>
        </a>


    {/* GitHub */}

        <a
        href="https://github.com/annamanoj"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
        >
        <FaGithub className="contact-icon" />

        <h3>GitHub</h3>

        <p>
            Projects & Code
        </p>
        </a>


    {/* Instagram */}

        <a
        href="https://www.instagram.com/_.annaayickal._?igsh=ZndrdjczeWIxeHo5"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card"
        >
        <FaInstagram className="contact-icon" />

        <h3>Instagram</h3>

        <p>
            Connect with me
        </p>
        </a>


      </div>


      {/* CV */}

      <div className="contact-cv">

        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
        >
        <FaFileDownload />
        <span>
            View / Download CV
        </span>
        </a>

      </div>


      <div className="contact-footer">

        <p>
          © {new Date().getFullYear()} Anna Manoj. All rights reserved.
        </p>

      </div>


    </section>

  );

}

export default Contact;