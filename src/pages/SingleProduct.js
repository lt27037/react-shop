import React from 'react';

import '../styles/SingleProduct.scss';

const SingleProduct = () => {

   return(
      <div className="product">
         <img src="https://picsum.photos/id/350/800/1000"
         alt="Zdjęcie produktu"
         className="product__photo"/>
         <div className="product__info">
            <div className="product__name">Produkt ABC</div>
            <div className="product__price">420,69zł</div>
            <button className="button">Dodaj do koszyka</button>
         </div>
      </div>
   );
};

export default SingleProduct;