import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../components/CartCounter';

import '../styles/Header.scss';

const Header = () => {
   return(
      <header className="mainHeader">
         <span className="mainHeader__logo">
            <Link to="/products">
               Sklep
            </Link>
         </span>
         <Link to="/cart">
            <CartCounter />
         </Link>
      </header>
   )
}

export default Header;