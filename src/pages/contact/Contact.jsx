import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            at possimus. Amet omnis adipisci blanditiis quos animi
            reprehenderit, porro accusamus.
          </p>
          {/* <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or oppertunities to be part of your
            visions.
          </p> */}

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">
                  <a href="mailto:preetiranjansahoo388@gmail.com">
                    preetiranjansahoo388@gmail.com
                  </a>
                </h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">
                  <a href="tel:+91-8917579373">+91-8917579373</a>
                </h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://github.com/preetiranjan-sahoo"
              target="_blank"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/preetiranjan-sahoo-414365204/"
              target="_blank"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/half.engine3r?igsh=MXc3Y3hlYXZoYzM1cw== "
              target="_blank"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
