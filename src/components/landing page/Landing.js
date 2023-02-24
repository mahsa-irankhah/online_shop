import React from "react";
import { Link } from "react-router-dom";

//images
import man1 from "../../images/hero/man1.jpg";
import woman1 from "../../images/hero/woman1.jpg";
import glasses from "../../images/hero/glasses.jpg";


const Landing = () => {
  
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={man1} className="d-block w-100" alt="man" />
            <div
              className="d-block position-relative"
              style={{ bottom: "500px", right: "300px" }}
            >
              <h2>Men's Collection 2022</h2>
              <h1>New Arrival</h1>
              <Link to="" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={woman1} className="d-block w-100 " alt="woman" />
            <div
              className="d-block position-relative"
              style={{ bottom: "500px", right: "300px" }}
            >
              <h2>Men's Collection 2022</h2>
              <h1>New Arrival</h1>
              <Link to="" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={glasses} className="d-block w-100" alt="glasses" />
            <div
              className="d-block position-relative"
              style={{ bottom: "500px", right: "300px" }}
            >
              <h2>Men's Collection 2022</h2>
              <h1>New Arrival</h1>
              <Link to="" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
