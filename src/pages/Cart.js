import React from 'react';
import { connect } from 'react-redux';

import ProductInCart from '../components/ProductInCart';

import '../styles/Cart.scss'

const Cart = ({ cart }) => {

   const items = cart.map(item => <ProductInCart key={item.id} product={item} />);

   return(
      <div className="cart">
         {cart.length === 0 ? "Koszyk jest pusty" : items}
      </div>
   );
};

const mapStateToProps = (state) => {
   return{
      cart: state.shop.cart
   }
}

export default connect(mapStateToProps)(Cart);