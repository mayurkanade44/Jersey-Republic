import React from "react";
import logo from "../images/logo512.png";
import { media } from "../utils/links";
import { Link } from "react-router-dom";
import review1 from "../images/review1.jpeg";
import review2 from "../images/review2.jpeg";
import review3 from "../images/review3.jpeg";
import review4 from "../images/review4.jpeg";

const About = () => {
  return (
    <div className="page">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-5 mb-3">
            <img className="img-fluid" src={logo} alt="JR" />
          </div>
          <div className="col-lg-7 pt-1 ">
            <h1 className="text-center">Our Story</h1>
            <div className="heading-underline"></div>
            <h4>
              We at Jersey Republic provides high qulity football jersey to all
              over the India.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              doloribus placeat hic cupiditate, vel explicabo veniam maiores
              atque assumenda. Accusamus optio architecto quisquam. Ea a alias
              aliquid rem dolores earum. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Laudantium quibusdam doloribus, illo voluptas
              impedit sapiente iure, aut aspernatur molestiae consequuntur
              laboriosam ducimus assumenda quaerat iusto ratione nostrum, harum
              eius obcaecati!
            </h4>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5 bg-dark">
        <div className="row">
          <div className="col-lg-6 border-end border-info">
            <h3 className="text-center pt-3">Contact Us</h3>
            <div className="heading-underline"></div>
            <p style={{ fontSize: 17, fontWeight: 500 }}>
              Feel free to reach out to us if you want do busniess with us or
              any customization on jersey or just want to connect ✌️
            </p>
            <h4 className="mt-5">Contact Info</h4>
            <p>abc@xyz.com</p>
            <div className="row g-5 pt-2">
              {media.map((m) => {
                return (
                  <div key={m.id} className="col-1 mobile-col">
                    <Link
                      to={{
                        pathname: m.link,
                      }}
                      target="_blank"
                    >
                      <img
                        src={m.img}
                        alt={m.name}
                        className="mobile-logo"
                        style={{ height: 45 }}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center pt-3">Our Happy Republicans</h3>
            <div className="heading-underline"></div>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="container-carousel">
                <div className="carousel-inner my-3">
                  <div className="carousel-item active">
                    <img
                      src={review1}
                      className="d-block w-100"
                      style={{ height: 450 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={review2}
                      className="d-block w-100"
                      style={{ height: 450 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={review3}
                      className="d-block w-100"
                      style={{ height: 450 }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={review4}
                      className="d-block w-100"
                      style={{ height: 450 }}
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
