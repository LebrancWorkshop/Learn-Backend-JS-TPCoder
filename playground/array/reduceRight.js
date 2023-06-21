const num = [1, 2, 3, 4, 5];
const result = num.reduceRight((a, b) => {
  return a - b;
})
console.log(result);
