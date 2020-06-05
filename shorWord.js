/* jshint esversion:6 */

function findShort(s){
  return s.split(' ')
    .map(item => item.length)
    .sort((a,b) => {
      return a > b ? 1 : a == b ? 0 : -1;
  })[0];
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
