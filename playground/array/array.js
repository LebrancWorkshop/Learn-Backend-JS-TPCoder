/**
 * -- Javascript Array Method. --
 * -- Source: https://www.linkedin.com/posts/connectwithyounus_js-array-activity-7072074729553051648-8KW2?utm_source=share&utm_medium=member_desktop --
 *
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
 * slice(start?: number, end?: number): T[] -> Extract a section of an array and return a new array.
 * reverse(): T[] -> Reverse the order of the elements of an array in place and return the reversed array (Overwrite on init array).
 * isArray(arg: any): arg is any[] -> Return true if the argument is an array, false otherwise.
 * indexOf(searchElement: T, fromIndex?: number): number -> Count from the start index (second argument that is optional) and Return the first index of specified value in an array. and return -1 if not found. (from left to right)
 * lastIndexOf(searchElement: T, fromIndex?: number): number `-> Count from the end index (second argument that is optional) and Return the last index of specified value in an array. and return -1 if not found. (from right to left).
 * find() -> Return the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
 * findIndex() -> Return the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
 * includes() -> Determine whether an array includes a certain value among its entries, returning true or false as appropriate.
 * entries() -> Return a new Array Iterator object that contains the key/value pairs for each index in the array.
 * every() -> Return true if all elements in an array pass a test (provided as a function), otherwise false.
 * some() -> Return true if at least one element in an array pass a test (provided as a function), otherwise false.
 * fill() -> Overwrite the value of all elements in an array from a start index (second argument that is optional) to an end index (third argument that is optional) with a static value (first argument) (overwrite init array).
 * copywithin() -> Copy array elements within the array, to and from specified positions.
 * valueOf() -> Return the array itself and does not change the init array.
 * forEach() -> Excute a provided function once for each array element.
 * map() ->
 * filter() -> Create a new array with all elements that pass the test implemented by the provided function.
 * reduce() -> 
 * reduceRight() ->
 * from() ->
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
const scoreList = [1,2,3,4,7];
console.log(`Slice: ${scoreList.slice(1, 3)}`);
console.log(scoreList);
console.log('==========');
const score = [1,2,3,0];
console.log(`Reverse: ${score.reverse()}`);
console.log(score);
console.log('==========');
const arr = [1,2,3,7,8];
const word = "Rider";
const user = { name: 'Gaia' };
console.log(Array.isArray(arr));
console.log(Array.isArray(word));
console.log(Array.isArray(user));
console.log('==========');
const device = ["Tablet", "PC", "Smartphone"];
console.log(`Index of: ${device.indexOf("PC", 0)}`);
console.log('==========');
const flow = ["Table", "Chart", "Graph", "Table", "Code", "Diagram"];
console.log(`Last Index of: ${flow.lastIndexOf("Table", 2)}`);
console.log('==========');
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.find((element) => element >= 3));
console.log(numbers.find((element) => element >= 10));
console.log(numbers);
console.log('==========');
console.log(numbers.findIndex((element) => element < 3));
console.log(numbers.findIndex((element) => element < 0));
console.log(numbers);
console.log('==========');
console.log(numbers.includes(3));
console.log(numbers.includes(10));
console.log('==========');
for(const [i, v] of numbers.entries()) {
  console.log(`Index: ${i}, Value: ${v}`);
}
console.log('==========');
console.log(numbers.every((element) => element < 10));
console.log(numbers.every((element) => element < 3));
console.log(numbers);
console.log('==========');
console.log(numbers.some((element) => element < 10));
console.log(numbers.some((element) => element < 3));
console.log(numbers.some((element) => element > 10));
console.log(numbers);
console.log('==========');
const books = ["The Adventure of Pud", "Penguin, The Good History", "Zod with Programmer", "Alchemist", "Arcane Pyro"];
console.log(books.fill("Book Fillers", 3, -1));
console.log(books);
console.log('==========');
const spells = ["Firaga", "Icesage", "Thundra", "Cure", "Haste", "Foggy", "Agile"];
console.log(spells.copyWithin(2, 1, 4));
console.log(spells);
console.log('==========');
console.log(spells.valueOf());
console.log(spells);
console.log('==========');
spells.forEach((spell, index, spells) => {
  spells[index] = spell.toUpperCase();
})
console.log(spells);
console.log('==========');
const okrs = ["Reading Books", "Cooking Foods", "Playing Games"];
console.log('==========');
console.log(Array.from("Spells"));
console.log("Spells".split(""));
console.log(Array.from("Spells") === "Spells".split("")); // false
console.log('==========');

