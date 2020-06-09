/* jshint esversion: 6 */

function pair ( elem ) {
  return elem == '(' ? ')' : elem == '[' ? ']' : elem == '{' ? '}' : '';
}

function validBraces ( braces ) {
  if ( braces.length % 2 != 0 ) return false;

  var k = braces.length;
  var cp = braces;
  for ( let i = k; i >= 0; i-- ) {
    const elem = braces[ i ];
    const str = elem + pair( elem );
    if ( str.length == 2 ) {
      cp = cp.replace( str, '' );
    }
  }
  k = braces.length / 2;
  for ( let i = k; i >= 0; i-- ) {
    const elem = braces[ i ];
    const str = elem + pair( elem );
    if ( str.length == 2 ) {
      cp = cp.replace( str, '' );
    }
  }
  return cp.length == 0;
}

console.log( validBraces( "()" ), true );
console.log( validBraces( "[(])" ), false );