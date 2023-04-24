import React from "react";
import { Link } from "react-router-dom";

//styles 
import "./landing page/styles/Card.scss";

const Card = ({product}) => {
    
    const splitTitle = product.title.split(" ");
    const newTitle = splitTitle[0] + " " + splitTitle[1];
    if (product.id <4 ) {
        return (
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={product.image}
                alt="Card pic"
              />
              <div className="card-body">
                <h5 className="card-title text-start">{newTitle}</h5>
                <p className="card-title text-start">$ {product.price}</p>
                <Link to="/" className="view-link">
                  view product
                </Link>
              </div>
            </div>
          </div>
        );
    }
  
};

export default Card;
