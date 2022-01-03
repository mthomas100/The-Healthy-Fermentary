import React, { SyntheticEvent } from 'react';
import { ProductWithQuantity, useCart } from '../lib/cartState';

type ModifyCartSelectorProps = {
  product: ProductWithQuantity;
};

const ModifyCartSelector: React.FC<ModifyCartSelectorProps> = ({ product }) => {
  const { modifyCartQuantity } = useCart();
  const { title, quantity, id } = product;

  const handleModifyCartQuantity = (newValue: string) => {
    console.log('handleModifyCartQuantity', newValue, product);
    modifyCartQuantity(product, parseInt(newValue));
  };

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
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
      </select>
    </>
  );
};

export default ModifyCartSelector;
