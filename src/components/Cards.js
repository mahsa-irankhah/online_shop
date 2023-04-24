import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = ({ pState }) => {
    
        return (
          <div>
            {pState.loading ? (
              <h2>wait a moment, plaese...</h2>
            ) : pState.error ? (
              <h2>failed. please refresh the page!</h2>
            ) : (
              <div className="container">
                <div className="row">
                  {pState.products.map((product) => (
                    <div className="col-4" key={product.id}>
                      <Card product={product} />
                    </div>
                  ))}
                </div>
                <div>
                  <Link to="/">see more</Link>
                </div>
              </div>
            )}
            
          </div>
        );
    
      
};

export default Cards;
