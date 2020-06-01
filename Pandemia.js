/* jshint esversion: 6 */

function infected(s) {
  var total = s.replace(/X/g,'').length;
  if (total == 0) return 0;
  var infected = 0;
  s.split('X').forEach(elem => {
    if (/1/.test(elem)) { infected += elem.length; }
  });

  return 100*infected/total;

}

console.log( infected("01000000X000X011X0X"), 73.33333333333333 );
console.log( infected("01X000X010X011XX"), 72.72727272727273 );
console.log( infected("XXXXX"), 0 );
console.log( infected("0000000010"), 100 );
console.log( infected("X00X000000X10X0100"), 42.857142857142854 );
