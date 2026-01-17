// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let x=array1.join('');
  let y=array2.join('');

  return Number(x)+Number(y)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
let x=String(value);
  let i=0,j=x.length-1;
  while(i<j && x[i]===x[j])
    {
     i++;j--; 
    }
  if(j<=i)
  {
    return true;
  }
  return false;
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  return (input)?(Number(input)?"":"Must be a number besides 0"):"Required field"
}
