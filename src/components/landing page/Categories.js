import React from 'react';
import { Link } from 'react-router-dom';

//styles
import "./styles/categories.scss";

//images
 import woman from "../../images/categories/banner-01.jpg";
 import man from "../../images/categories/banner-02.jpg";
 import acc from "../../images/categories/banner-03.jpg";

const Categories = () => {
    return (
      <div class="container">
        <div class="row categories">
          <div
            class="col card position-relative"
            style={{ width: "100px", margin: "10px" }}
          >
            <img src={woman} alt="card woman" />
            <span className="text-name">
              <span>Woman</span>
              <span>Spring 2023</span>
            </span>
            <Link className="shop-link">SHOP NOW</Link>
            <div className="hovering-card"></div>
          </div>
          <div class="col card" style={{ width: "18rem", margin: "10px" }}>
            <Link>
              <img className="card-img-top" src={man} alt="card man" />
            </Link>
          </div>
          <div class="col card" style={{ width: "18rem", margin: "10px" }}>
            <Link>
              <img className="card-img-top" src={acc} alt="card accessory" />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Categories;