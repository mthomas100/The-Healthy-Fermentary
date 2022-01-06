import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import cloneDeep from 'lodash.clonedeep';
import { ProductWithQuantity } from '../types/ProductWithQuantity';
import useCost, { UseCostProps } from './useCost';

type CartContext = {
  // cart contents is an array of objects
  cartContents: ProductWithQuantity[];
  addToCart: (product: ProductWithQuantity) => void;
  removeFromCart: (product: ProductWithQuantity) => void;
  modifyCartQuantity: (
    product: ProductWithQuantity,
    newQuantity: number
  ) => void;
  emptyCart: () => void;
  cartItemTotal: number;
  cartSubTotal: number;
};

const LocalStateContext = createContext<CartContext>({} as CartContext);
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // CART CONTENTS & MODIFICATION
  const [cartContents, setCartContents] = useState<ProductWithQuantity[]>([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  function addToCart(product = {} as ProductWithQuantity) {
    const cartProduct = cloneDeep(product);
    const { id } = product;

    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // item doesn't exist yet in our cart
    if (cartIndex === -1) {
      cartProduct.quantity = 1;
      setCartContents((prevArray) => [...prevArray, cartProduct]);
    }

    // item already exists in our cart
    if (cartIndex !== -1) {
      cartContents[cartIndex].quantity += 1;
      setCartContents([...cartContents]);
    }
  }

  function removeFromCart(product = {} as ProductWithQuantity) {
    // remove item with a specified ID from the cart
    const { id } = product;
    setCartContents(cartContents.filter((item) => item.id !== id));
  }

  function modifyCartQuantity(
    product: ProductWithQuantity,
    newQuantity: number
  ) {
    const { id } = product;
    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // item already exists in our cart
    if (cartIndex !== -1) {
      cartContents[cartIndex].quantity = newQuantity;
      return setCartContents([...cartContents]);
    }
  }

  function emptyCart() {
    setCartContents([]);
  }

  // COST Calculation

  const cost = useCost(cartSubTotal);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setCartItemTotal(
      cartContents.reduce((tally, item) => tally + item.quantity, 0)
    );
    setCartSubTotal(
      cartContents.reduce(
        (tally, item) => tally + item.quantity * item.price,
        0
      )
    );
  }, [cartContents, cartItemTotal]);

  return (
    <LocalStateProvider
      value={{
        cartContents,
        addToCart,
        removeFromCart,
        modifyCartQuantity,
        emptyCart,
        cartItemTotal,
        cartSubTotal,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};

// Custom Hook to access context values
function useCart(): CartContext {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };
