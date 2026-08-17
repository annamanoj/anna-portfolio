import { useState } from "react";
import "../styles/about.css";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="about" id="about">

        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          I'm a recent <span>Master of Information Technology</span> graduate
          from <span>RMIT University</span> with a strong foundation in
          software engineering, full-stack web development, data analytics,
          cloud computing and artificial intelligence. Backed by a Bachelor's
          degree in Computer Science and Engineering and hands-on project
          experience, I enjoy transforming complex problems into practical,
          user-focused software solutions through continuous learning and
          modern technologies. I am currently seeking graduate opportunities
          where I can contribute, grow and build impactful digital solutions.
        </p>

        <button
          className="read-btn"
          onClick={() => setOpen(true)}
        >
          Read My Story →
        </button>

      </section>

      {open && (
        <div className="story-modal">

          <div className="story-container">

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            

            {/* RMIT */}

            <div className="story-card">

              <img
                src="/images/rmit.jpg"
                alt="RMIT University"
              />

              <div>
                

                <h3>Master of Information Technology
                    <span className="college-name">RMIT University</span>
                </h3>


                <div className="story-year">
                    March 2024 - December 2025
                </div>

                <p>
                  Completing my Master's at <strong>RMIT University,
                  Melbourne</strong> marked an important milestone in my
                  journey. Studying in Australia strengthened my technical
                  knowledge in software engineering, cloud computing,
                  artificial intelligence, data analytics, databases and
                  software development while giving me opportunities to work
                  on industry-focused projects and collaborate with diverse
                  teams.

                  Alongside my studies, I worked as a Customer Service
                  Representative at Viva Energy Retail, where I developed
                  communication, adaptability and problem-solving skills in
                  a fast-paced environment.
                </p>

              </div>

             
                 <a
                    className="story-link"
                    href="https://www.rmit.edu.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit RMIT University →
                </a>
                

            </div>

            {/* Bachelor's */}

            <div className="story-card reverse">

              

              <div>

                <h3>Bachelor of Computer Science & Technology
                     <span className="college-name">VJCET</span>
                </h3>

                <div className="story-year">
                    June 2019 - July 2023
                </div>

                <p>
                  Before moving to Australia, I completed my Bachelor of
                  Technology in Computer Science and Engineering at
                  <strong> Viswajyothi College of Engineering &
                  Technology</strong>, affiliated with APJ Abdul Kalam
                  Technological University. During these four years I built
                  a strong foundation in programming, software engineering,
                  databases, networking and algorithms while completing
                  projects including a Pneumonia Detection System and an
                  Online Blood Donation Management System.
                </p>

                    
                    <a
                    className="story-link"
                    href="https://vjcet.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Viswajyothi College →
                </a>

                </div>

                <img
                    src="/images/vjcet.jpg"
                    alt="VJCET"
                />

            </div>

            {/* School */}

            <div className="story-card">

              <img
                src="/images/school.jpg"
                alt="School"
              />

              <div>

                <h3>Girijyothi CMI Public School</h3>

                <div className="story-year">
                    June 2003 - March 2018
                </div>

                <p>
                  My academic journey began at Girijyothi CMI Public School,
                  an institution managed by the Carmelites of Mary
                  Immaculate (CMI). The school encouraged confidence,
                  leadership, discipline and holistic development while
                  creating opportunities to participate beyond academics.
                  Those early experiences helped shape the mindset and
                  curiosity that continue to guide me today.
                </p>

              </div>

              
                <a
                    className="story-link"
                    href="https://www.girijyothicmischool.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Girijyothi CMI Public School →
                </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default About;