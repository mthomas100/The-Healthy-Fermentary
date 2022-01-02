import React from 'react';
import { Product } from '../graphql/types';
import { useCart } from '../lib/cartState';

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }) {
  const { cartContents, modifyCartQuantity } = useCart();

  const handleAddToCart = () => {
    modifyCartQuantity(product, 1); // TODO: Needs to add X to whats already there
  };

  return (
    <button
      type="button"
      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
      onClick={handleAddToCart}
    >
      Add to bag
    </button>
  );
}
