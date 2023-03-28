/**
 *
 * Your task is to make a function that can take any ASCII number as
 * an argument and return it with its chars in descending order.
 *
 * Essentially, rearrange the chars to create the highest possible number.
 *
 * @param asciiNum - the ASCII input number
 *
 */
function sortTheHighestNum(asciiNum) {
    var charArray = asciiNum.toString().split("");
    charArray.sort(function (a, b) { return b.charCodeAt(0) - a.charCodeAt(0); });
    return charArray.join("");
}
var a = 531;
var b = 145263;
var c = 123456789;
console.log(sortTheHighestNum(a)); // result: 531
console.log(sortTheHighestNum(b)); // result: 654321
console.log(sortTheHighestNum(c)); // result: 987654321
