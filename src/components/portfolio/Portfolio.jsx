import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: " Food Order App",
    github: "https://github.com/Abuh-Bakar/foodOrderApp2-with-http-request",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: " Landing Page website",
    github: "https://github.com/Abuh-Bakar/landing-page",
  },
  {
    id: 3,
    image: IMG3,
    title: " Tic Tac Toe Game App",
    github: "https://github.com/Abuh-Bakar/tic-tac-toe-game",
  },
  {
    id: 4,
    image: IMG4,
    title: " Expense Tracker App",
    github: "https://github.com/Abuh-Bakar/Expense-Tracker",
  },
  {
    id: 5,
    image: IMG5,
    title: " Form App",
    github: "https://github.com/Abuh-Bakar/forms2",
  },
  {
    id: 6,
    image: IMG6,
    title: "  Fitness site website",
    github: "https://github.com/Abuh-Bakar/theFitnessWorld",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {/* <h5>My Recent Work</h5> */}
      <h2>My Recent Works</h2>

      <div className="container porfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                {/* <a href={demo} className="btn btn-primary" target="_blank">
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
