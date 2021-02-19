import React, { useState, useEffect} from 'react';

import { ReactComponent as CartIcon } from '../images/shopping-cart-solid.svg';

import '../styles/CartCounter.scss'

import { connect } from 'react-redux';

const CartCounter = ({ cart }) => {

   const [cartCount, setCartCount] = useState(0);

   useEffect(
      () => {
         let count = 0;
         cart.forEach(item => count += item.qty);
         setCartCount((count));
      },
      [cart]
   )

   return(
      <div className="cartCounter">
         <CartIcon className="cartCounter__cartIcon" />
         <span className="cartCounter__counter">{cartCount}</span>
      </div>
   )
}

const mapStateToProps = (state) => {
   return{
      cart: state.shop.cart,
   }
}

export default connect(mapStateToProps)(CartCounter);