import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import { ProductWithQuantity } from '../types/ProductWithQuantity';

type FilterContext = {
  setActiveSort: (sort: string) => void;
  filterData: (data: ProductWithQuantity[]) => ProductWithQuantity[];
  activeSort: string;
  setActiveFilters: (cb: (prevFilters: string[]) => string[]) => void;
  activeFilters: string[];
};

const LocalStateContext = createContext<FilterContext>({} as FilterContext);
const LocalStateProvider = LocalStateContext.Provider;

const FilterStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSort, setActiveSort] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // TODO: Call in context (which listens for changes in activeSort
  // and activeFilters) in order to get data that filters based on both conditions
  const filterData = (data: ProductWithQuantity[]): ProductWithQuantity[] => {
    // Reorder data by price from lowest to highest
    (function () {
      switch (activeSort) {
        case 'newest':
          return data.sort(
            (a, b) =>
              Date.parse(a.createdAt as string) -
              Date.parse(b.createdAt as string)
          );
        case 'price-desc':
          return data.sort((a, b) => b.price - a.price);
        case 'price-asc':
          return data.sort((a, b) => a.price - b.price);
        default:
          return data;
      }
    })();

    // Filter data instructions: Only return product if it has all of the activeFilters
    const filteredData = data.filter((product) => {
      const productCategoryNames = product.categories?.map(
        (category) => category?.name
      );

      // check to see if productCategoryNames includes ALL of the activeFilters
      const allowProduct = activeFilters.every((filter) =>
        productCategoryNames?.includes(filter)
      );

      return allowProduct;
    });

    console.log('filtered', filteredData);

    return filteredData;

    // TODO: Consider moving this logic to a hook which renders only on the appropriate pages
    // Solves problem of data persisting when coming back to a page
    // Idea just to keep activeSort and activeFilter in context
  };

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  return (
    <LocalStateProvider
      value={{
        setActiveSort,
        activeSort,
        filterData,
        setActiveFilters,
        activeFilters,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};

// Custom Hook to access context values
function useFilter(): FilterContext {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { FilterStateProvider, useFilter };
