/* jshint esversion: 6 */
/* jshint esversion: 7 */

function comp ( array1, array2 ) {
  //your code here

  if ( array1 == null || array2 == null || array1.length != array2.length ) return false;

  dir = ( a, b ) => a - b;
  array1.sort( dir );
  array2.sort( dir );

  for ( var i = 0; i < array1.length; i++ ) {
    if ( array1[ i ] ** 2 != array2[ i ] ) {
      return false;
    }
  }

  return true;

}


a1 = [ 121, 144, 19, 161, 19, 144, 19, 11 ];
a2 = [ 11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19 ];
console.log( comp( a1, a2 ) );