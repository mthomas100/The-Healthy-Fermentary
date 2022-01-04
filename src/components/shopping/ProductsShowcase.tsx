import React from 'react';
import { Category } from '../../graphql/types';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import ProductsFilter from './ProductsFilter';
import ProductsHeader from './ProductsHeader';
import ProductsList from './ProductsList';

type ProductsShowcaseProps = {
  products: ProductWithQuantity[];
  categories: Category[];
};

const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({
  products,
  categories,
}) => {
  return (
    <>
      <ProductsHeader />
      <ProductsFilter categories={categories} />
      <ProductsList products={products} />
    </>
  );
};

export default ProductsShowcase;
