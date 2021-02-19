import React from 'react';
import '../styles/Products.scss'

import { connect } from 'react-redux';

import ProductThumbnail from '../components/ProductThumbnail';


const Products = ({ products }) => {
   return(
      <div className="productsContainer">
         {products.map(product => <ProductThumbnail key={product.id} product={product}/>)}
      </div>
   );
};

const mapStateToProps = state => {
   return{
      products: state.shop.products,
   }
}

export default connect(mapStateToProps)(Products);