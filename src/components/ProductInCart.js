import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { removeFromCart, adjustQty } from '../redux/Shopping/shopping-actions';

import '../styles/ProductInCart.scss'


const ProductInCart = ({ product, removeFromCart, adjustQty }) => {

   const [productQty, setProductQty] = useState(product.qty);

   const handlePlus = () =>  adjustQty(product.id, product.qty + 1)
   const handleMinus = () => product.qty > 1 ? adjustQty(product.id, product.qty - 1) : null;

   useEffect(
      () => {
         setProductQty(product.qty);
      },
      [product]
   )

   return(
      <div className="inCart">
         <img src={product.url} alt="XD" className="inCart__img"/>
         <span className="inCart__name">{product.name}</span>
         <span className="inCart__price">{product.price}zł</span>
         <div className="inCart__qty">
            <button className="inCart__button" onClick={handlePlus}>+</button>
            <span className="inCart__qty__value">{productQty}</span>
            <button className="inCart__button" onClick={handleMinus}>-</button>
         </div>
         <div className="inCart__sum">{product.price * product.qty}zł</div>
         <button className="inCart__remove" onClick={() => removeFromCart(product.id)}>Usuń</button>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return{
      removeFromCart: (id) => dispatch(removeFromCart(id)),
      adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
   };
};

export default connect(null, mapDispatchToProps)(ProductInCart);