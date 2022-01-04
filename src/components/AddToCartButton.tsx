import React from 'react';
import { useCart } from '../lib/cartState';
import { ProductWithQuantity } from '../types/ProductWithQuantity';

type AddToCartProps = {
  product: ProductWithQuantity;
};

const AddToCartButton: React.FC<AddToCartProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product); // TODO: Needs to add X to whats already there
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
};

export default AddToCartButton;
