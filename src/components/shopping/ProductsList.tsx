import { useEffect } from 'react';
import { useFilter } from '../../lib/filterState';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import ProductLink from './ProductLink';
import ProductsListProduct from './ProductsListProduct';

type ProductsProps = {
  products: ProductWithQuantity[];
};

const ProductsList: React.FC<ProductsProps> = ({ products }) => {
  const { filterData } = useFilter();
  const filteredProducts = filterData(products);

  useEffect(() => {
    console.log(filteredProducts);
  }, [filteredProducts]);
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="pt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-10 lg:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductsListProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
