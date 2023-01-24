import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Patricio Imbrogno",
    review:
      "Fue un placer trabajar con Mercedes en el marco del Coding Bootcamp de Plataforma 5. Es una excelente profesional, tanto en plano técnico como humano. Se destaca por su capacidad resolutiva, su practicidad, y su atención al detalle. Se puede confiar plenamente en ella durante un trabajo en conjunto.",
  },
  {
    avatar: AVTR2,
    name: "Pedro Mafortt",
    review:
      "Mercedes es apasionada y dedicada en lo que hace. Con total proactividad estuvo siempre dispuesta a resolver los problemas y superar los desafios de forma ágil y transparente, además de siempre apoyar al equipo. Fue un gran placer poder trabajar con ella y tener tanto intercambio de conocimiento.",
  },
  {
    avatar: AVTR3,
    name: "Javier Boxler",
    review:
      "Mercedes fue quien me impulsó a salir de mi zona de confort. Es una excelente capacitadora, con una excelente mezcla técnica y comercial que no es fácil de encontrar. Recomiendo altamente a Mercedes para potenciar y dirigir equipos. ",
  },
  {
    avatar: AVTR4,
    name: "Julian Cecchi",
    review:
      "Mechi es una gran trabajadora, muy comprometida con su equipo y sus responsabilidades y especialista en Ecommerce. Mechi es también una increíble compañera de equipo, siempre proactiva y súper dedicada a empujar a cualquiera que necesite apoyo o conocimiento. Finalmente, es una gran amiga, una persona de gran corazón, alegre y de personalidad intensa y transparente. Un combo de skills que un gran líder de equipos de alta performance junta, en una sola persona.",
  },
  {
    avatar: AVTR5,
    name: "Facundo Voncina",
    review:
      "Recomiendo a Mercedes para cualquier trabajo en el que se requiere un profesional comprometido y de gran calidad humana, que sepa trabajar en equipo y relacionarse con el cliente, y que a la vez preste atención a los detalles técnicos de los distintos proyectos en los que trabaja.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>De parte de mis colegas</h5>
      <h2>Recomendaciones</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={100}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="colleague__avatar">
                <img src={avatar} alt={name}></img>
              </div>
              <h5 className="colleague__name">{name}</h5>
              <small className="colleague__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
