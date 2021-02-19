import React from 'react';

import { ReactComponent as CartIcon } from '../images/shopping-cart-solid.svg';

import '../styles/CartCounter.scss'

const CartCounter = () => {
   return(
      <div className="cartCounter">
         <CartIcon className="cartCounter__cartIcon" />
         <span className="cartCounter__counter">0</span>
      </div>
   )
}

export default CartCounter;