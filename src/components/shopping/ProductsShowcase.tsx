import React from 'react';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import ProductsFilter from './ProductsFilter';
import ProductsHeader from './ProductsHeader';
import ProductsList from './ProductsList';

type ProductsShowcaseProps = {
  products: ProductWithQuantity[];
};

const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ products }) => {
  return (
    <>
      <ProductsHeader />
      <ProductsFilter />
      <ProductsList products={products} />
    </>
  );
};

export default ProductsShowcase;
