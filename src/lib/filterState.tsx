import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ProductWithQuantity } from '../types/ProductWithQuantity';

type FilterContext = {
  setActiveSort: (sort: string) => void;
  filterData: (data: ProductWithQuantity[]) => ProductWithQuantity[];
};

const LocalStateContext = createContext<FilterContext>({} as FilterContext);
const LocalStateProvider = LocalStateContext.Provider;

const FilterStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeSort, setActiveSort] = useState('');

  const filterData = (data: ProductWithQuantity[]): ProductWithQuantity[] => {
    // Reorder data by price from lowest to highest
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
  };

  useEffect(() => {
    // Manipulate data here based on the changing of activeSort or active filters
    console.log(activeSort);
  }, [activeSort]);

  return (
    <LocalStateProvider value={{ setActiveSort, filterData }}>
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
