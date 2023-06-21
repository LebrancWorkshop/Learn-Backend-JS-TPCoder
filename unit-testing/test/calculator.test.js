import { add, mul, div } from '../src/calculator.js';

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiply 3 * 10 to equal 30', () => {
  expect(mul(3, 10)).toBe(30);
});

test('dividing 20 / 10 to equal 2', () => {
  expect(div(20, 10)).toBe(2);
});

test('dividing 20 / 0 to throw some error', () => {
  expect(() => div(20, 0)).toThrow("Should not divided by zero");
});
