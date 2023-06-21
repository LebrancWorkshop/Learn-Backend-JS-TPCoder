export function add(operand1, operand2) {
  return operand1 + operand2;
};

export function mul(operand1, operand2) {
  return operand1 * operand2;
};

export function div(operand1, operand2) {
  if(operand2 === 0) {
    throw new Error("Should not divided by zero");
  }
  return operand1 / operand2;
};
