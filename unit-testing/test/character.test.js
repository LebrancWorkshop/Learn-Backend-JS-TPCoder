import { checkPalindrome } from '../src/utils/character.js';

test('Check Palindrome [2, 0, 2] return true', () => {
  expect(checkPalindrome([2, 0, 2])).toBe(true);
});

test('Check Palindrome [1,0,1,0] return false', () => {
  expect(checkPalindrome([1, 0, 1, 0])).toBe(false);
});

test('Check Palindrome [2,0,1,8] return false', () => {
  expect(checkPalindrome([2, 0, 1, 8])).toBe(false);
});

