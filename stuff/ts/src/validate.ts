export default function validateHealthAmount(amount: number) {
  if (typeof amount !== "number") {
    throw new Error("Amount must be a number");
  }

  if (amount <= 0 || amount > 10) {
    throw new Error("The amount cant be less tha one or greater than ten");
  }
}
