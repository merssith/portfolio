import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Conoceme</h5>
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>6+ años</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>25+ completados</small>
            </article>
          </div>
          <p>
            Actualmente, me encuentro desarrollando proyectos de manera
            personal, sin embargo quiero aplicar todos mis conocimientos y
            retomar mis orígenes laborales para ejercer nuevamente en el área de
            desarrollo de software. Para mantenerme actualizada en las ultimas
            tecnologías, finalice una capacitación intensivo de Full Stack
            Developer orientado a Javascript y PERN Stack.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
