/**
 * 
 * Take 2 strings s1 and s2 including only letters from a to z. 
 * Return a new sorted string, the longest possible, 
 * containing distinct letters - each taken only once - 
 * coming from s1 or s2.
 * 
 * @param s1 - first input string
 * @param s2 - second input string
 * 
 */
function secondTask(s1: string, s2: string): string {
    const allowedChars: string = "abcdefghijklmnopqrstuvwxyz";
    if (!isValidString(s1, allowedChars) || !isValidString(s2, allowedChars)) {
      throw new Error("Input strings can only contain letters from a to z.");
    }
    const concatenatedString: string = s1 + s2;
    let uniqueChars: string = "";
    for (let i = 0; i < concatenatedString.length; i++) {
      const currentChar: string = concatenatedString[i];
      if (uniqueChars.indexOf(currentChar) === -1) {
        uniqueChars += currentChar;
      }
    }

    const sortedChars: string[] = uniqueChars.split("").sort();
    return sortedChars.join("");
  }
  
  function isValidString(str: string, allowedChars: string): boolean {
    for (let i = 0; i < str.length; i++) {
      const currentChar: string = str[i];
      if (allowedChars.indexOf(currentChar) === -1) {
        return false;
      }
    }
    return true;
  }

const s1 = "xyaabbbccccdefww";
const s2 = "xxxxyyyyabklmopq";

const result1 = secondTask(s1,s2)
console.log(result1); // Result1: "abcdefklmopqwxy"

const s3 = "abcdefghijklmnopqrstuvwxyz";

const result2 = secondTask(s3, s3);
console.log(result2); // Result2: "abcdefghijklmnopqrstuvwxyz"

const s4 = "xyz123";
const result3 = secondTask(s1, s4);
console.log(result3); // Result3: Error message - does not contain allowed chars