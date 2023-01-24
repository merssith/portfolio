import React from "react";
import { useState } from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("experience")}
        className={activeNav === "experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("portfolio")}
        className={activeNav === "portfolio" ? "active" : ""}
      >
        <BsBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("contact")}
        className={activeNav === "contact" ? "active" : ""}
      >
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default Navbar;
