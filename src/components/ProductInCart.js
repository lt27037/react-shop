import React from 'react';

import '../styles/ProductInCart.scss'

const ProductInCart = ({ product }) => {
   return(
      <div className="inCart">
         <img src={product.url} alt="XD" className="inCart__img"/>
         <span className="inCart__name">{product.name}</span>
         <span className="inCart__price">{product.price}zł</span>
         <div className="inCart__qty">
            <button className="inCart__button">+</button>
            <span className="inCart__qty__value">{product.qty}</span>
            <button className="inCart__button">-</button>
         </div>
         <div className="inCart__sum">{product.price * product.qty}zł</div>
         <button className="inCart__remove">Usuń</button>
      </div>
   )
}

export default ProductInCart;