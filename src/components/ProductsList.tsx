import { Product } from '../graphql/types';
import ProductLink from './ProductLink';

type ProductsProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="pt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-10 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <ProductLink slug={product.slug}>
                <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                  <img
                    src={product.image?.url}
                    alt={product.title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>

                <h3 className="mt-4 text-sm text-gray-700 font-normal">
                  <span className="absolute inset-0" />
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {/* TODO: Make categories appear in a bubble */}
                  {product.categories && product.categories.length > 0 ? (
                    product.categories
                      ?.map((category) => category?.name)
                      .join(',  ')
                  ) : (
                    <br />
                  )}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </ProductLink>
            </div>
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
