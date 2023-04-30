import React from 'react';
import { Link } from 'react-router-dom';

//styles
import "../styles/categories.scss";

//images
 import woman from "../../images/categories/banner-01.jpg";
 import man from "../../images/categories/banner-02.jpg";
 import acc from "../../images/categories/banner-03.jpg";

const Categories = () => {
    return (
      <div className="container">
        <div className="row categories">
          <div
            className="col card position-relative"
            style={{ width: "20rem", height: "250px", margin: "10px" }}
          >
            <img src={woman} alt="card woman" />
            <div className="hovering-card"></div>
            <span className="text-name">
              <span className="main_name">Woman</span>
              <span className="sub_name">Spring 2023</span>
            </span>
            <Link className="shop-link">SHOP NOW</Link>
          </div>
          <div
            className="col card position-relative"
            style={{ width: "18rem", height: "250px", margin: "10px" }}
          >
            <img className="card-img-top" src={man} alt="card man" />
            <div className="hovering-card"></div>
            <span className="text-name">
              <span className="main_name">Men</span>
              <span className="sub_name">Spring 2023</span>
            </span>
            <Link className="shop-link">SHOP NOW</Link>
          </div>
          <div
            className="col card"
            style={{ width: "18rem", height: "250px", margin: "10px" }}
          >
            <img className="card-img-top" src={acc} alt="card accessory" />
            <div className="hovering-card"></div>
            <span className="text-name">
              <span className="main_name">Accessory</span>
              <span className="sub_name">New Trend</span>
            </span>
            <Link className="shop-link">SHOP NOW</Link>
          </div>
        </div>
      </div>
    );
};

export default Categories;