import { add } from '../src/calculator.js';

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
