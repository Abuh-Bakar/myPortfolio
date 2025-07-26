import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs
      .sendForm('service_sbz4mve', 'template_v7uo1kq', form.current, {
        publicKey: 'PByIgLp66NeF89gAJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <section id="contact">
      {/* <h5>Get In Touch</h5> */}
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>mashudabubakar311@gmail.com</h5>
            <a href="mailto:mashudabubakar311@gmail.com" target="_blank">
              {" "}
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Abu Bakar</h5>
            <a
              href="https://www.facebook.com/abubakar.mashud.52"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className="contact__option-icon"/>
            <h4>Whatspp</h4>
            <h5>09058491832</h5>
            <a href="https://wa.me/2349058491832" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="Name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="Message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
