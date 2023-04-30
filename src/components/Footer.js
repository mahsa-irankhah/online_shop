import React from "react";

//styles
import "./styles/Footer.scss";

//icons
import { FaInstagram, FaFacebookF, FaPinterestP} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul>
              CATEGORIES
              <li>women</li>
              <li>men</li>
              <li>accessories</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              HELP
              <li>take order</li>
              <li>returns</li>
              <li>shipping</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              GET IN TOUCH
              <li>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </li>
              <li>
                <FaFacebookF
                  style={{
                    color: "#9c9c9c",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <FaInstagram
                  style={{
                    color: "#9c9c9c",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
                <FaPinterestP
                  style={{
                    color: "#9c9c9c",
                    fontSize: "20px",
                    marginRight: "10px",
                  }}
                />
              </li>
            </ul>
          </div>
          <div className="col form">
            <p>NEWSLETTER</p>
            <form>
              <input type="text" placeholder="email@example.com" className="text-box" />
              <input type="submit" value="SUBSCRIBE" className="subscribe-btn"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
