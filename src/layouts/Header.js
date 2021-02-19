import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

const Header = () => {
   return(
      <header className="mainHeader">
         <span className="mainHeader__logo"><Link to="/">Sklep</Link></span>
      </header>
   )
}

export default Header;