/* jshint esversion: 6 */
// * DONE

function order(words) {
  var arr = words.split(' ');
  arr.sort((n, k) => {
    a = Number(n.match(/[0-9]/)[0]);
    b = Number(k.match(/[0-9]/)[0]);
    return a > b ? 1 : a == b ? 0 : -1;
  });
  return arr.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");

