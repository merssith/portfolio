import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
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
          Cuento con mas de 6 años de experiencia en el rubro IT. Actualmente me encuentro trabajando como Back End Developer y cuento con experiencia en otras áreas como gestión de proyectos, delivery manager y arquitectura de soluciones.
          Me gusta trabajar en ámbitos donde pueda aplicar todos mis conocimientos en la construcción de productos digitales innovadores y que me permitan seguir creciendo como profesional.
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
