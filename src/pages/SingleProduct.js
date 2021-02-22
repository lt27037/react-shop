import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-actions';

import '../styles/SingleProduct.scss';

const SingleProduct = () => {

   // @ts-ignore
   const product = useSelector(shop => shop.shop.currentItem);
   const dispatch = useDispatch();

   return(
      <div className="product">
         <img src={product.url}
         alt="Zdjęcie produktu"
         className="product__photo"/>
         <div className="product__info">
            <div className="product__name">{product.name}</div>
            <div className="product__price">{product.price}zł</div>
            <button className="button" onClick={() => dispatch(addToCart(product.id))}>Dodaj do koszyka</button>
         </div>
      </div>
   );
};

export default SingleProduct;