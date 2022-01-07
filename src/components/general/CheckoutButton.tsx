import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { useCart } from '../../lib/cartState';
import CheckoutError from '../cart/CheckoutError';

const CheckoutButton: React.FC = () => {
  const { cartContents } = useCart();
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (cartContents.length === 0) {
      setError(true);
    } else {
      setError(false);
      Router.push('/checkout');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
      >
        Checkout
      </button>
      {error && (
        <div className="mt-5">
          <CheckoutError />
        </div>
      )}
    </>
  );
};

export default CheckoutButton;
