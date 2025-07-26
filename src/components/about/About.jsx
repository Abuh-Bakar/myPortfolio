import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </article>
          </div>

          <p>
            Full stack developer With experience in both frontend and backend
            development, I can create a superb online presence for businesses,
            blogs, and more. Using the latest technologies like React.js,
            Express.js, MUI, and Bootstrap, i can create a landscape of online
            possibilities that are visually appealing and user-friendly
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
