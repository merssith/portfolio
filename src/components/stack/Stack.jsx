import React from "react";
import "./stack.css";
import { BiCheck } from "react-icons/bi";

const Stack = () => {
  return (
    <section id="stack">
      <h5>Lo que sé</h5>
      <h2>Mi Stack Tecnológico</h2>

      <div className="container stack__container">
        <article className="stack">
          <div className="stack__head">
            <h3>Competente</h3>
          </div>
          <ul className="stack__list">
            <li>
              <BiCheck className="stack__list-icon" />
              <p>NodeJS</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Express</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Sequelize</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>React</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Redux</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Javascript</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>JSON</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Handlebars</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>HTML</p>
            </li>
          </ul>
        </article>
        <article className="stack">
          <div className="stack__head">
            <h3>Intermedio</h3>
          </div>
          <ul className="stack__list">
            <li>
              <BiCheck className="stack__list-icon" />
              <p>MongoDB</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>GIT</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>JWT</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Mocha</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Chai</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>SASS</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>API Rest</p>
            </li>
          </ul>
        </article>
        <article className="stack">
          <div className="stack__head">
            <h3>Algo de experiencia</h3>
          </div>
          <ul className="stack__list">
            <li>
              <BiCheck className="stack__list-icon" />
              <p>NestJs</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Joi</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Typescript</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Python</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Java</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>Docker</p>
            </li>
            <li>
              <BiCheck className="stack__list-icon" />
              <p>DataDog</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Stack;
