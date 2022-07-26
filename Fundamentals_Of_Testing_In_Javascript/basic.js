const sum = (a, b) => a + b;
// Error
// const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// Most basic form of testing
let result = sum(3, 7);
let expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}


