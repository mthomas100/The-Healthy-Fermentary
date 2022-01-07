import React, { useState } from 'react';
import ReactLoader from 'react-loader-spinner';
import { useCart } from '../lib/cartState';
import { ProductWithQuantity } from '../types/ProductWithQuantity';

type AddToCartProps = {
  product: ProductWithQuantity;
};

const AddToCartButton: React.FC<AddToCartProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product);
      setLoading(false);
    }, 600);
  };

  return (
    <button
      type="button"
      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
      onClick={handleAddToCart}
      disabled={loading}
    >
      {loading ? (
        <ReactLoader
          type="TailSpin"
          color="white"
          height="1.5rem" // line height of font
          timeout={0}
        />
      ) : (
        'Add to cart'
      )}
    </button>
  );
};

export default AddToCartButton;
