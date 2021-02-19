import React from 'react';
import { Link, useHistory} from 'react-router-dom';

import '../styles/ProductThumbnail.scss';

const ProductThumbnail = () => {

   const history = useHistory();

   const handleClick = () => {
      history.push({pathname: '/products/1'})
   }

   return(
      <div className="productThumbnail" onClick={handleClick}>
         <img 
         src="https://picsum.photos/400/500" 
         alt="Miniatura produktu" 
         className="productThumbnail__photo"/>
         <div className="productThumbnail__name">Produkt XYZ</div>
         <div className="productThumbnail__price">420,69zł</div>
         <Link to="/products/1">
            <button className="button">Dodaj do koszyka</button>
         </Link>
      </div>
   );
};

export default ProductThumbnail;