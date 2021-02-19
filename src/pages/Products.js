import React from 'react';

import ProductThumbnail from '../components/ProductThumbnail';

import '../styles/Products.scss'

const Products = () => {
   return(
      <div className="productsContainer">
         <ProductThumbnail />
         <ProductThumbnail />
         <ProductThumbnail />
         <ProductThumbnail />
         <ProductThumbnail />
      </div>
   );
};

export default Products;