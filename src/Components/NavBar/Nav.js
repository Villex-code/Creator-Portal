import React from "react";
import Logo from "../../assets/logo.png";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav__container container">
      <img src={Logo} alt="Picture of Logo" className="nav__logo" />

      <div className="nav__icons">
        <AiOutlinePhone className="nav__icons-single icon__phone" />
        <TbGridDots className="nav__icons-single icon__dots" />
        <AiOutlineMail className="nav__icons-single icon__mail" />
      </div>

      <div className="nav__socials">
        <AiFillTwitterCircle />
        <FaLinkedin />
        <AiFillInstagram />
      </div>

      <div className="nav__words">
        <h4>Home</h4>
        <h4>Work</h4>
        <h4>About us</h4>
        <h4>Contact us</h4>
      </div>

      {/* The h3 should change depending on the section of the page */}
      <h3>Contact Us</h3>
    </nav>
  );
};

export default Nav;
