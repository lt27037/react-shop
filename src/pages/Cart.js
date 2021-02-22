import React from 'react';
import { useSelector } from 'react-redux';

import ProductInCart from '../components/ProductInCart';

import '../styles/Cart.scss'

const Cart = () => {
   // @ts-ignore
   const cart = useSelector(shop => shop.shop.cart);
   const items = cart.map(item => <ProductInCart key={item.id} product={item} />);

   return(
      <div className="cart">
         {cart.length === 0 ? "Koszyk jest pusty" : items}
      </div>
   );
};

export default Cart;