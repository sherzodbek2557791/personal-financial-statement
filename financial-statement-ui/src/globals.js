export default {
  get app() {
    return {
      supportPhone: "+998 97 922 50 00",
      supportEmail: "support@finance.uz",
      currencies: [{ currency: "USD", title: "Dollar", format(amount){ return `$ ${amount}`;} }, { currency: "SUM", title: "So'm", format(amount){ return `${amount} so'm`;} }]
    };
  }
};
