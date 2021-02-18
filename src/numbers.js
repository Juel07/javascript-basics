const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const round = a => Math.round(a);

const roundUp = a => Math.ceil(a);

const roundDown = a => Math.floor(a);

const absolute = a => Math.abs(a);

const quotient = (a, b) => Math.trunc(a / b); //  truncates/cuts off the dot & the digits to the right of it, no matter whether the argument is a +ve or -ve number

const remainder = (a, b) => a % b;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
