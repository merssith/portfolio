import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "The Movie Database",
    github: "https://github.com/merssith/TMDB-Back",
    demo: "https://dribble.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Globant Broken Office",
    github: "https://github.com/merssith/BrokenOffice-Back",
    demo: "https://dribble.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Ecommerce Librando Bookstore",
    github: "https://github.com/merssith/Librando-BACK",
    demo: "https://dribble.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank">
                  GitHub
                </a>
                {/* <a href={demo} className="btn" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
