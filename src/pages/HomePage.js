import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/HomePage.scss'

const HomePage = () => {
   return(
      <div className="homePage">
         <h1>Witaj w naszym sklepie!</h1>
         <Link to="/products"><button>Kup teraz</button></Link>
      </div>
   );
};

export default HomePage;