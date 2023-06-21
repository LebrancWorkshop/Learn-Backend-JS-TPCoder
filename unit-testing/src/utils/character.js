export function checkPalindrome(inputArray) {
  const reserveArray = [...inputArray];
  const reverseArray = inputArray.reverse();
  
  let checkpoint = 0;

  for(let i = 0; i < inputArray.length; i++) {
    if(reserveArray[i] === reverseArray[i]) {
      checkpoint++;
    }
  }

  return checkpoint === inputArray.length ? true : false;
}
