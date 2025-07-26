import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      {/* <h5>What I Offer</h5> */}
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Corporate websites</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>E-Commerce Websites</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Blogs</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Portfolios</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>News and media sites</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Education Platforms</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Online forums</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Social media platforms</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>Express JS Backend App</p>
            </li>
            <li className="service__list-list">
              <BsPatchCheckFill className="service__list-icon" />

              <p>React JS Frontend App</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
