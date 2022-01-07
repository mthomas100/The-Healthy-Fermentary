import Image from 'next/image';
import React from 'react';
import { useCart } from '../../lib/cartState';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';
import ModifyCartSelector from './ModifyCartSelector';

type CartItemProps = {
  cartItem: ProductWithQuantity;
};

const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { removeFromCart } = useCart();

  return (
    <li key={cartItem.id} className="flex py-6 sm:py-10">
      <div className="flex-shrink-0 relative w-24 h-24 sm:w-32 sm:h-32">
        {cartItem.image?.url && (
          <Image
            src={cartItem.image?.url}
            alt={cartItem.title}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            className="rounded-lg"
          />
        )}
      </div>

      <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div>
          <div className="flex justify-between sm:grid sm:grid-cols-2">
            <div className="pr-6">
              <h3 className="text-sm">{cartItem.title}</h3>
            </div>

            <p className="text-sm font-medium text-gray-900 text-right">
              ${cartItem.price}
            </p>
          </div>

          <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
            <ModifyCartSelector product={cartItem} />
            {/* / TODO: INVESTIVATE WHY NO TYPE ERROR IF NO PROPS PROVIDED */}
            <button
              type="button"
              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
              onClick={() => removeFromCart(cartItem)}
            >
              <span>Remove</span>
            </button>
          </div>
        </div>

        {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                      <XIcon
                        className="flex-shrink-0 h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />

                      <span>Out of stock</span>
                    </p> */}
      </div>
    </li>
  );
};

export default CartItem;
