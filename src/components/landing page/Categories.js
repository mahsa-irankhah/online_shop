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
            style={{ width: "18rem", margin: "10px" }}
          >
            <img className="card-img-top " src={woman} alt="card woman" />
            <div className="hovering-card card">
              <h2>Woman</h2>
              <p>Spring 2023</p>
            </div>
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
      // <div className='container'>
      //   <div class="card col-4" style={{ width: "18rem" }}>
      //     <img class="card-img-top" src={woman} alt="Card" />
      //     </div>
      //   </div>
    );
};

export default Categories;