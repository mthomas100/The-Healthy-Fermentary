import Image from 'next/image';
import React from 'react';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import ProductLink from './ProductLink';

type ProductsListProductProps = {
  product: ProductWithQuantity;
};

const ProductsListProduct: React.FC<ProductsListProductProps> = ({
  product,
}) => {
  return (
    <div className="group relative">
      <ProductLink slug={product.slug}>
        <div className="h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80 relative">
          {product.image?.url && (
            <Image
              src={product.image?.url}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            />
          )}
        </div>

        <h3 className="mt-4 text-sm text-gray-700 font-normal">
          <span className="absolute inset-0" />
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {/* TODO: Make categories appear in a bubble */}
          {product.categories && product.categories.length > 0 ? (
            product.categories?.map((category) => category?.name).join(',  ')
          ) : (
            <br />
          )}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-900">
          ${product.price}
        </p>
      </ProductLink>
    </div>
  );
};

export default ProductsListProduct;
