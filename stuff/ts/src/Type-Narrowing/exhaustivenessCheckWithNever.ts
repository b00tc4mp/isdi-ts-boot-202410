/*Exhaustiveness Check con never: Es una técnica que aprovecha el sistema de
 tipos de TypeScript para garantizar que todas las variantes de un tipo de
 unión discriminada se manejen adecuadamente.
Ventajas:
Seguridad de tipos mejorada: Te alerta sobre casos no manejados en tiempo de
compilación.
Facilita el mantenimiento: Al agregar nuevas variantes, el compilador te
indicará dónde necesitas actualizar el código. */

type CreditCardPayment = {
  method: "creditCard";
  cardNumber: string;
  cvv: string;
  expirationDate: string;
};

type PayPalPayment = {
  method: "paypal";
  email: string;
};

type BankTransferPayment = {
  method: "bankTransfer";
  accountNumber: string;
  routingNumber: string;
};

type CashPayment = {
  method: "cash";
  amount: number;
};

type Payment =
  | CreditCardPayment
  | PayPalPayment
  | BankTransferPayment
  | CashPayment;

const processPayment = (payment: Payment): string => {
  switch (payment.method) {
    case "creditCard":
      return `Processing credit card payment with card number ${payment.cardNumber}`;
    case "paypal":
      return `Processing PayPal payment for email ${payment.email}`;
    case "bankTransfer":
      return `Processing bank transfer from account ${payment.accountNumber}`;
    case "cash":
      return `Processing cash payment of amount $${payment.amount}`;
    default:
      // Exhaustiveness check
      const _exhaustiveCheck: never = payment;
      return _exhaustiveCheck;
  }
};

console.log(processPayment({ method: "paypal", email: "loque@sea.net" }));
