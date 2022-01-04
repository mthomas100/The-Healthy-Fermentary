import { Category } from '../../graphql/types';
import Filter from '../filters/Filter';
import Sort from '../filters/Sort';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type ProductsFilterProps = {
  categories: Category[];
};

const ProductsFilter: React.FC<ProductsFilterProps> = ({ categories }) => {
  return (
    <div className="bg-gray-50">
      <div>
        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <section
              aria-labelledby="filter-heading"
              className="border-t border-gray-200 py-6"
            >
              <h2 id="filter-heading" className="sr-only">
                Product filters
              </h2>

              <div className="flex items-center justify-between">
                <Sort />
                <Filter categories={categories} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsFilter;
