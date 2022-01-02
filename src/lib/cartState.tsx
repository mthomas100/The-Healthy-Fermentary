import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import cloneDeep from 'lodash.clonedeep';
import { Product } from '../graphql/types';

// import { GlobalContext } from '../types/globalContext';
// import { TeamsData } from '../types/teamsData';

// type CartItem = {
//   product: Product;
// };

type CartContext = {
  // cart contents is an array of objects
  cartContents: Product[];
  addToCart: (product: Product) => void;
  // removeFromCart,
  // modifyCartQuantity,
  // emptyCart,
  // modifyCart,
  // cartItemTotal,
};

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // CART CONTENTS & MODIFICATION
  const [cartContents, setCartContents] = useState([]);
  const [cartItemTotal, setCartItemTotal] = useState(0);

  function addToCart(product = {} as Product) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const cartProduct = cloneDeep(product) as Product;
    const { id } = product;

    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // item doesn't exist yet in our cart
    if (cartIndex === -1) {
      console.log('item not found in cart');
      Object.assign(cartProduct, { quantity: 1 });
      // cartProduct.quantity = 1;

      setCartContents((prevArray) => [...prevArray, cartProduct]);
    }

    // item already exists in our cart
    if (cartIndex !== -1) {
      cartContents[cartIndex].quantity += 1;
      setCartContents([...cartContents]);
    }
  }

  function removeFromCart(id) {
    // remove item with a specified ID from the cart
    setCartContents(cartContents.filter((item) => item.id !== id));
  }

  function modifyCart(id, value) {
    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // if value is 'increment', increase quantity by 1
    if (value === 'increment') {
      cartContents[cartIndex].quantity += 1;
      setCartContents([...cartContents]);
    }

    if (value === 'decrement') {
      const currentQuantity = cartContents[cartIndex].quantity;
      // if value is 'decrement', and current quantity == 1, removeFromCart(id)
      if (currentQuantity === 1) {
        return removeFromCart(id);
      }
      // if value is 'decrement', and current quantity >= 1 decrease quantity by 1
      if (currentQuantity >= 1) {
        cartContents[cartIndex].quantity -= 1;
        setCartContents([...cartContents]);
      }
    }
  }

  function modifyCartQuantity(product, quantity) {
    const cartProduct = cloneDeep(product);
    const { id } = product;

    const cartIndex = cartContents.findIndex((item) => item.id === id);

    // item doesn't exist yet in our cart
    if (cartIndex === -1) {
      cartProduct.quantity = quantity;
      setCartContents((prevArray) => [...prevArray, cartProduct]);
    }

    // item already exists in our cart
    if (cartIndex !== -1) {
      cartContents[cartIndex].quantity += quantity;
      setCartContents([...cartContents]);
    }
  }

  function emptyCart() {
    setCartContents([]);
  }

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setCartItemTotal(
      cartContents.reduce((tally, item) => tally + item.quantity, 0)
    );
  }, [cartContents, cartItemTotal]);

  useEffect(() => {
    console.log(cartContents);
  }, [cartContents]);

  return (
    <LocalStateProvider
      value={{
        cartContents,
        addToCart,
        removeFromCart,
        modifyCartQuantity,
        emptyCart,
        modifyCart,
        cartItemTotal,
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
