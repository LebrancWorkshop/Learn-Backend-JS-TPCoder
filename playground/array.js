/**
 * -- Javascript Array Method. --
 * toString(): string -> Returns a string with all the array values, separated by commas.
 * join(seperator?: string): string -> Returns a new string by concatenating all of the elements in an array by specified separator.
 * pop(): T | undefined -> Removes the last element from an array and returns that element.
 * push(...items: T[]): number -> Add new items to the end of an array and return the new length of the array.
 * shift(): T | undefined -> Remove the first element from an array and return that element.
 * unshift(...items: T[]): number -> Add new items to the beginning of an array and return the new length of the array.
 * delete -> Operator to delete an element from an array (leave the element undefined).
 * concat(...items: ConcatArray<T>()): T[] -> Concatenate (Join) two or more arrays, return a new array.
 * sort(compareFn?: (a: T, b: T) => number): this -> Sort the elements of an array in place and return the sorted array.
 * splice(start: number, deleteCount: number, ...items: T[]): T[] -> Add or remove items to or from an array, and return the removed item(s).
 * slice()
 * reverse()
 * isArray()
 * indexOf()
 * lastIndexOf()
 * find()
 * findIndex()
 * includes()
 * entries()
 * every()
 * some()
 * fill()
 * copywithin()
 * valueOf()
 * forEach()
 * map()
 * filter()
 * reduce()
 * reduceRight()
 * from()
 */

const stringArray = ["First", "Second", "Third", "Fourth", "Fifth"];
console.log(stringArray.toString());
console.log('==========');
console.log(`Join: ${stringArray.join(" ")}`);
console.log('==========');
console.log(`Pop: ${stringArray.pop()}`);
console.log(stringArray);
console.log('==========');
console.log(`Push: ${stringArray.push("Imposter")}`);
console.log(stringArray);
console.log('==========');
console.log(`Shift: ${stringArray.shift()}`);
console.log(stringArray);
console.log('==========');
console.log(`Unshift: ${stringArray.unshift("Unshift")}`);
console.log(stringArray);
console.log('==========');
delete stringArray[1];
console.log(stringArray);
console.log(stringArray[1]); // undefined.
console.log('==========');
const numberArray = [1, 2, 3, 4, 5];
const numberArray2 = [10, 20, 30, 40, 50];
const concatArray = numberArray.concat(numberArray2);
console.log(`Concat: ${concatArray}`);
console.log(concatArray);
console.log('==========');
const numEx = [1, 32, 88, 41, 90];
const wordEx = ["Justify", "Amiga", "Wyvern"];
console.log(`Sort (Number): ${numEx.sort()}`);
console.log(`Sort (String): ${wordEx.sort()}`);
console.log('==========');
const gangList = ["Yagimucha", "Zenyama", "Egonohanazemasu"];
console.log(`Splice: ${gangList.splice(1, 1, "Kanagawa")}`);
console.log(gangList);
console.log('==========');
