import React from 'react';
import { useSelector } from 'react-redux';

import ProductThumbnail from '../components/ProductThumbnail';

import '../styles/Products.scss'

const Products = () => {
   // @ts-ignore
   const products = useSelector(shop => shop.shop.products);

   return(
      <div className="productsContainer">
         {products.map(product => <ProductThumbnail key={product.id} product={product}/>)}
      </div>
   );
};

export default Products;