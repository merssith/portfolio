import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let notification = document.getElementById("notification");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          notification.innerHTML +=
            "Gracias por tu mensaje. Te responderé a la brevedad!";
            e.target.reset();
        },
        (error) => {
          notification.innerHTML +=
            "Existe algun problema con este formulario. Puedes contactarme por email o por whatsApp. Lamento las molestias :)";
        }
      );
  };

  return (
    <section id="contact">
      <h5>Hablemos!</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>mercedes.salcedo1989@gmail.com</h5>
            <a href="mailto:mercedes.salcedo1989@gmail.com" target="_blank">
              Envia un mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=5491134020804"
              target="_blank"
            >
              Envia un mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <small id="notification"></small>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Tu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
