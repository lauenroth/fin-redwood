const currency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

class NumberHelper {
  static formatCurrency = (amount: number) => {
    return currency.format(amount);
  };
}

export default NumberHelper;
