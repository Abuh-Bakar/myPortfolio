import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfolio Website</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Express JS Backend App</p>
            </li>
            <li>
            <BiCheck className="service__list-icon" />
            <p>React JS Frontend App</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
