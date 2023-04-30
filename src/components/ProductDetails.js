import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    
    const params = useParams();
    const id = params.id;
    return (
      <div>
          details - {id}
        
      </div>
    );
};

export default ProductDetails;