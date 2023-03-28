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
function secondTask(s1, s2) {
    var allowedChars = "abcdefghijklmnopqrstuvwxyz";
    if (!isValidString(s1, allowedChars) || !isValidString(s2, allowedChars)) {
        throw new Error("Input strings can only contain letters from a to z.");
    }
    var concatenatedString = s1 + s2;
    var uniqueChars = "";
    for (var i = 0; i < concatenatedString.length; i++) {
        var currentChar = concatenatedString[i];
        if (uniqueChars.indexOf(currentChar) === -1) {
            uniqueChars += currentChar;
        }
    }
    var sortedChars = uniqueChars.split("").sort();
    return sortedChars.join("");
}
function isValidString(str, allowedChars) {
    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i];
        if (allowedChars.indexOf(currentChar) === -1) {
            return false;
        }
    }
    return true;
}
var s1 = "xyaabbbccccdefww";
var s2 = "xxxxyyyyabklmopq";
var result1 = secondTask(s1, s2);
console.log(result1); // Result1: "abcdefklmopqwxy"
var s3 = "abcdefghijklmnopqrstuvwxyz";
var result2 = secondTask(s3, s3);
console.log(result2); // Result2: "abcdefghijklmnopqrstuvwxyz"
var s4 = "xyz123";
var result3 = secondTask(s1, s4);
console.log(result3); // Result3: Error message - does not contain allowed chars
