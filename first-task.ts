/**
 * 
 * Your task is to make a function that can take any ASCII  as 
 * an argument and return it with its chars in descending order. 
 * 
 * Essentially, rearrange the chars to create the highest possible number.
 * 
 * @param asciiNum - the ASCII input number
 * 
 */

function sortTheHighestNum(asciiNum: string): string {
  const charArray: string[] = asciiNum.split("");
  charArray.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  return charArray.join("");
}

const a = "531";
const b = "145263";
const c = "123456789";

console.log(sortTheHighestNum(a)); // result: 531
console.log(sortTheHighestNum(b)); // result: 654321
console.log(sortTheHighestNum(c)); // result: 987654321