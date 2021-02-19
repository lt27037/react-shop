import React from 'react';
import { useHistory} from 'react-router-dom';

import { connect } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-actions';

import '../styles/ProductThumbnail.scss';

const ProductThumbnail = ({ product, addToCart }) => {
   const { id, url, price, name } = product;

   const history = useHistory();

   const handleClick = () => {
      history.push({pathname: '/products/'+id})
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
         <button className="button" onClick={() => addToCart(product.id)}>Dodaj do koszyka</button>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   return{
      addToCart: (id) => dispatch(addToCart(id)),
   };
};

export default connect(null, mapDispatchToProps)(ProductThumbnail);