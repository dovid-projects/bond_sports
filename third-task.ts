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

function compareArrays(a: number[], b: number[]): boolean {
    if (!a || !b || a.length === 0 || b.length === 0) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    const map = new Map<number, number>();
    for (const num of a) {
      if (!map.has(num)) {
        map.set(num, 1);
      } else {
        map.set(num, map.get(num)! + 1);
      }
    }
    for (const num of b) {
      const root = Math.sqrt(num);
      if (Number.isInteger(root) && map.has(root)) {
        map.set(root, map.get(root)! - 1);
        if (map.get(root)! < 0) {
          return false;
        }
      } else {
        return false;
      }
    }
    
    return true;
  }

  const results1 = compareArrays([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])
  console.log("Valid arrays: ", results1)

  const results2 = compareArrays([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])
  console.log("Invalid arrays: ", results2)