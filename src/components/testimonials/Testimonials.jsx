import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";
import AVTR6 from "../../assets/avatar6.jpg";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Mr. Abuh",
    review:
      "Working with Abubakar Mashud was a pleasure. His attention to detail and problem-solving skills is top-notch. He delivered our project on time and exceeded our expections.",
  },
  {
    avatar: AVTR2,
    name: "Mrs.Ogecha",
    review:
      "Abubakar Mashud is a talented developer who consistently delivers high-quality work. I highly recommend him to anyone looking for a skilled developer.",
  },
  {
    avatar: AVTR3,
    name: "Mrs.Halimat",
    review:
      "I was impressed by Abubakar Mashud ability to understand our complex requirements and turn them into a functional solution. His communication skills and profesionalism made the entire process smooth and enjoyable.",
  },
  {
    avatar: AVTR4,
    name: "Miss Mashudat",
    review:
      "Abubakar is a rockstar developer! He worked tirelessly to resolve issues and ensured our project was completed to perfection. His dedication and expertise is truly exceptional.",
  },
  {
    avatar: AVTR5,
    name: "Mr.Chinedu",
    review:
      "I am thoroughly impressed with Mashud skills and work ethics. He took the time to understand our needs and delivered a solution that met our expections. I will definitely work with him again.",
  },
  {
    avatar: AVTR6,
    name: "Mr.Desmond",
    review:
      "Abubakar Mashud, your are simply the best. your attention to detail, creativity and technical expertise is top-notch. I will continue to work with you and i highly recommend anyone looking for a top-notch developer.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5> Review from clients</h5> */}
      <h2>Review from Clients</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickabe: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
