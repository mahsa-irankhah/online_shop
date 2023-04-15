import React from "react";
import { Link } from "react-router-dom";


//icons
import cart from "../images/shopping-bag.svg";
import like from "../images/heart.svg";
import search from "../images/search-icon.svg";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Mahsa Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <img src={cart} alt="shopping cart" />
              <img src={search} alt="search" />
              <img src={like} alt="favorite" />
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;
