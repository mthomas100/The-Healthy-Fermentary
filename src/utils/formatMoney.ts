type FormatMoneyTypes = (amount: number, wholeNoCentsMode?: boolean) => string;

const formatMoney: FormatMoneyTypes = (amount, wholeNoCentsMode = false) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  // if the price is a whole number, leave off the .00

  if (wholeNoCentsMode) {
    if ((amount * 100) % 100 === 0) options.minimumFractionDigits = 0;
  }
  const formatter = new Intl.NumberFormat('en-US', options);

  return formatter.format(amount);
};

export default formatMoney;
