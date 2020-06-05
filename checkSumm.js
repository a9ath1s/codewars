/* jshint esversion: 6 */

function checkConcatenatedSum(num, rep) {
  let result = String((Math.abs(num))).split('').reduce((sum, current) =>
    sum + Number(current.repeat(rep)),
    0);
  return result * (num > 0 ? 1 : -1) == num;
}

console.log(checkConcatenatedSum(2997, 3), true);
console.log(checkConcatenatedSum(-2997, 3), true);
