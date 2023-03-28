/**
 *
 * Given two arrays a and b write a function comp(a, b)
 * that checks whether the two arrays have the "same" elements,
 * with the same multiplicities (the multiplicity of a member is the number of times it appears).
 * "Same" means, here, that the elements in b are the  in elements a squared, regardless of the order.
 *
 * @param a - first array input
 * @param b - second array input
 *
 */
function compareArrays(a, b) {
    // Check if either array is null, undefined, or empty
    if (!a || !b || a.length === 0 || b.length === 0) {
        return false;
    }
    // Check if arrays are of different lengths
    if (a.length !== b.length) {
        return false;
    }
    // Create a Map to store the count of each unique element in array a
    var map = new Map();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var num = a_1[_i];
        if (!map.has(num)) {
            map.set(num, 1);
        }
        else {
            map.set(num, map.get(num) + 1);
        }
    }
    // Check if each element in array b is the square of an element in array a
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var num = b_1[_a];
        var root = Math.sqrt(num);
        if (Number.isInteger(root) && map.has(root)) {
            map.set(root, map.get(root) - 1);
            if (map.get(root) < 0) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
var results1 = compareArrays([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]);
console.log("Valid arrays: ", results1);
var results2 = compareArrays([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]);
console.log("Invalid arrays: ", results2);
