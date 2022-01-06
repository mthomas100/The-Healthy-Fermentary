export type CartCostCalculatorTypes = (
  subtotal: number,
  shipping?: number,
  taxRate?: number
) => {
  subtotalCost: number;
  shippingCost: number;
  taxCost: number;
  orderTotal: number;
};

export const cartCostCalculator: CartCostCalculatorTypes = (
  subtotal,
  shipping = 5,
  taxRate = 0.08
) => {
  const subtotalCost = subtotal;
  const shippingCost = shipping;
  const taxCost = taxRate * (subtotalCost + shippingCost);
  const orderTotal = subtotalCost + shippingCost + taxCost;
  return {
    subtotalCost,
    shippingCost,
    taxCost,
    orderTotal,
  };
};
