/* jshint esversion: 6 */

function digital_root ( n ) {
  if ( n == 0 ) return 0;
  var arr = n.toString().split( '' );
  while ( arr.length > 1 ) {
    res = arr.reduce( ( a, b ) => parseInt( a ) + parseInt( b ) );
    arr = res.toString().split( '' );
  }
  return res;
}

console.log( digital_root( 16 ), 7 );
console.log( digital_root( 456 ), 6 );