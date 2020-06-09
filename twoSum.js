/* jshint esversion: 6 */

function twoSum ( numbers, target ) {
  var res = [];
  numbers.forEach( ( elem, index, numbers ) => {
    for ( let i = index + 1; i < numbers.length; i++ ) {
      if ( elem + numbers[ i ] == target ) {
        if ( !!res.indexOf( index ) ) res.push( index );
        res.push( i );
      }
    }
  } );
  return res;
}

function numericalCompare ( a, b ) {
  return a - b;
}

console.log( twoSum( [ 1, 2, 3 ], 4 ).sort( numericalCompare ), [ 0, 2 ] );
console.log( twoSum( [ 1234, 5678, 9012 ], 14690 ).sort( numericalCompare ), [ 1, 2 ] );
console.log( twoSum( [ 2, 2, 3 ], 4 ).sort( numericalCompare ), [ 0, 1 ] );
