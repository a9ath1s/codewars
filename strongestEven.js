/* jshint esversion: 6 */

function strongestEven ( n, m ) {
  // Your code here.
  res = 0;
  elem = 0;
  for ( let i = n; i <= m; i++ ) {
    var num = i;
    r = 0;
    while ( num >= 2 & num % 2 == 0 ) {
      num /= 2;
      r++;
    }
    if ( r > res ) { res = r; elem = i; }
  }
  return elem;
}

console.log( strongestEven( 1, 2 ), 2 );
console.log( strongestEven( 5, 10 ), 8 );
console.log( strongestEven( 48, 56 ), 48 );
console.log( strongestEven( 129, 193 ), 192 );