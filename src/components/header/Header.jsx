import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome, I'm</h5>
        <h1>Abubakar Mashud</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className=" scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
