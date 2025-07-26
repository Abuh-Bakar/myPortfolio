import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abubakar-mashud-438165248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="__blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Abuh-Bakar" target="__blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
