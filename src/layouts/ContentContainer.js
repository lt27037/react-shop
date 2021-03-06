import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import Cart from '../pages/Cart';

const ContentContainer = () => {
   return(
         <Switch>

            <Route path="/" exact>
               <HomePage />
            </Route>

            <Route path="/products" exact>
               <Products />
            </Route>

            <Route path="/products/:id" exact>
               <SingleProduct />
            </Route>

            <Route path="/cart">
               <Cart />
            </Route>

         </Switch>
   )
}

export default ContentContainer;