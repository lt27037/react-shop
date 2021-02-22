import React from 'react';
import { useHistory} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart, loadCurrentItem } from '../redux/Shopping/shopping-actions';

import '../styles/ProductThumbnail.scss';

const ProductThumbnail = ({ product }) => {

   const dispatch = useDispatch();
   const history = useHistory();

   const { id, url, price, name } = product;

   const handleClick = () => {
      dispatch(loadCurrentItem(product))
      history.push({pathname: '/products/'+id});
   }

   return(
      <div className="productThumbnail" >
         <img 
         src={url}
         alt={name}
         onClick={handleClick}
         className="productThumbnail__photo"/>
         <div className="productThumbnail__name">{name}</div>
         <div className="productThumbnail__price">{price}zł</div>
         <button className="button" onClick={() => dispatch(addToCart(product.id))}>Dodaj do koszyka</button>
      </div>
   );
};

export default ProductThumbnail;