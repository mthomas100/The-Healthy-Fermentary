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

    // TODO: THE BELOW FUNCTIONS SHOULD AVOID DIRECTLY MODIFYING THE STATE DATA

    // item doesn't exist yet in our cart
    if (cartIndex === -1) {
      console.log('NO ITEM EXISTS');
      const cartProductNew = Object.assign(cartProduct, { quantity: 1 });
      // cartProduct.quantity = 1;

      setCartContents((prevArray) => [...prevArray, cartProductNew]);
    }

    // item already exists in our cart
    if (cartIndex !== -1) {
      // THIS IS CHANGING STATE, THEN ASSIGNING THE VALUE OF THE PROPERTY OF STATE
      // TO A VARIABLE CALLED cartProductModified AND APPENDING IT TO THE ARRAY
      // TODO: ASK DOES THIS AFFECT STATE IF setCartContents WERE NOT USED BELOW?s
      const cartProductModified = (cartContents[cartIndex].quantity += 1);
      console.log('ITEM EXISTS', cartProductModified);

      setCartContents([...cartContents, cartProductModified]);
    }
  }

  function removeFromCart(id) {
    // remove item with a specified ID from the cart
    setCartContents(cartContents.filter((item) => item.id !== id));
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
