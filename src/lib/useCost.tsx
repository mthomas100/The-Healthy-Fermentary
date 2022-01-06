import formatMoney from '../utils/formatMoney';

export type UseCostProps = (
  subtotal: number,
  shipping?: number,
  taxRate?: number
) => {
  subtotalCost: string;
  shippingCost: string;
  taxCost: string;
  orderTotal: string;
};

const useCost: UseCostProps = (subtotal = 0, shipping = 5, taxRate = 0.08) => {
  const subtotalCost = subtotal;
  const shippingCost = subtotalCost !== 0 ? shipping : 0;
  const taxCost = taxRate * (subtotalCost + shippingCost);
  const orderTotal = subtotalCost + shippingCost + taxCost;

  const returnVals = {
    subtotalCost,
    shippingCost,
    taxCost,
    orderTotal,
  } as { [key: string]: number };

  // iterate through returnVals and format each value
  const formattedVals = Object.keys(returnVals).reduce(
    (acc, key) => ({
      ...acc,
      [key]: formatMoney(returnVals[key]),
    }),
    {}
  ) as ReturnType<UseCostProps>;

  return formattedVals;
};

export default useCost;
