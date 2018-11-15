/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  let result = [];
  if (array.length === 0 ) return result;

  for (let i = 0; i < array.length; i += 1) {
    result.push(1);
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] !== array[i]) {
        result[result.length-1] *= array[j];
      }
    } 
  }

  return result;
}

module.exports = getAllProducts;