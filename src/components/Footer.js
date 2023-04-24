import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <ul>
              categories
              <li>women</li>
              <li>men</li>
              <li>accessories</li>
            </ul>
          </div>
          <div class="col">
            <ul>
              help
              <li>take order</li>
              <li>returns</li>
              <li>shipping</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div class="col">
            <ul>
              GET IN TOUCH
              <li>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </li>
              <li>icons</li>
            </ul>
          </div>
          <div class="col">
            <p>NEWSLETTER</p>
            <form>
              <input type="text"  />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
