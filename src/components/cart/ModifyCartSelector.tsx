import React from 'react';
import { useCart } from '../../lib/cartState';
import { ProductWithQuantity } from '../../types/ProductWithQuantity';

type ModifyCartSelectorProps = {
  product: ProductWithQuantity;
};

const ModifyCartSelector: React.FC<ModifyCartSelectorProps> = ({ product }) => {
  const { modifyCartQuantity } = useCart();
  const { title, quantity, id } = product;

  const handleModifyCartQuantity = (newValue: string) => {
    modifyCartQuantity(product, parseInt(newValue));
  };

  const SELECTOR_ITEM_COUNT = 8;
  const items = [];
  for (let i = 1; i < SELECTOR_ITEM_COUNT; i += 1) {
    items.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <label htmlFor={`quantity-${title}`} className="sr-only">
        Quantity, {product.quantity}
      </label>
      <select
        id={`quantity-${id}`}
        name={`quantity-${title}`}
        className="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={quantity}
        onChange={(e) => handleModifyCartQuantity(e.target.value)}
        size={1}
      >
        {items}
      </select>
    </>
  );
};

export default ModifyCartSelector;
