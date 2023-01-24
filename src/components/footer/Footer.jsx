import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mechi Salcedo
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre mi</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#stack">Stack tecnológico</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Recomendaciones</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mechisalcedo/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Merssith/">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mechi Salcedo</small>
      </div>
    </footer>
  );
};

export default Footer;
