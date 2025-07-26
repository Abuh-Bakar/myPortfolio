import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ABK-Tech
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/abuhjnr?igsh=YTY1aWN4a3BwcTcz" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/Abuh-Bakar" target="__blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abubakar-mashud-438165248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="__blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abuh's portfolio. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
