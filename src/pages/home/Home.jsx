import React from "react";
import Profile from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I am Preetiranjan</span> Web Developer
          </h1>
          <p className="home__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            laboriosam nam adipisci error facilis! Suscipit nulla veritatis nam
            placeat culpa facilis impedit earum iure! Quod, debitis? Vero culpa
            in sit.
          </p>
          <Link to="/about" className="button">
            More about me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
