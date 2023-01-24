import React from "react";
import "./experience.css";
import { HiCheckBadge } from "react-icons/hi2";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Lo que hice</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__job">
          <h3>Back End Developer</h3>
          <h4>ÜMA Salud IA</h4>
          <p>ene. 2023 - actualidad</p>
          <div className="experience__content">
            <p>Stack:</p>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Node.Js</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Nest</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Joi</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Typescript</small>
            </article>
          </div>
        </div>
        <div className="experience__job">
          <h3>Project Manager & Delivery Manager</h3>
          <h4>M3</h4>
          <p>sep. 2021 - ago. 2022</p>
          <div className="experience__content">
            <p>Tareas:</p>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">
                Análisis y arquitecturas de soluciones.
              </small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">
                Seguimiento de proyectos. Garantizar entregas y desarrollo del
                producto.
              </small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Coordinación de equipo.</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">
                Capacitación interna y externa.
              </small>
            </article>
          </div>
        </div>
        <div className="experience__job">
          <h3>Project Manager & Solution Architect</h3>
          <h4>VTEX</h4>
          <p>may. 2015 - dic. 2019</p>
          <div className="experience__content">
            <p>Tareas:</p>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">
                Análisis y arquitecturas de soluciones para mas de 20 agencias
                implementadoras de VTEX ecommerce.
              </small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">
                Seguimiento de proyectos. Garantizar entregas y desarrollo del
                producto.
              </small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">
                Capacitación interna y externa.
              </small>
            </article>
          </div>
        </div>
        <div className="experience__job">
          <h3>Full Stack Developer</h3>
          <h4>Segundo Hogar</h4>
          <p>ene. 2014 - may. 2015</p>
          <div className="experience__content">
            <p>Stack:</p>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Node.Js</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">Javascript</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">HTML</small>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience__details-icon" />
              <small className="text-light">CSS</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
