const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (numbers) => numbers.reduce((total, number) => total + number, 0);

const multiply = (numbers) => numbers.reduce((total, number) => total * number, 1);

const power = (num, powerOf) => num ** powerOf

const factorial = (num) => {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
