function isValidWalk ( walk ) {
  if ( walk.length != 10 ) {
    res = false;
  } else {
    v = 0;
    h = 0;

    walk.forEach( function ( elem ) {
      if ( elem.toLowerCase() == 'n' ) { v += 1; }
      else if ( elem.toLowerCase() == 's' ) { v -= 1; }
      else if ( elem.toLowerCase() == 'w' ) { h += 1; }
      else if ( elem.toLowerCase() == 'e' ) { h -= 1; }
      else { res = false; }
    } );
    res = ( h == 0 && v == 0 );
  }
  console.log( res );
  return res;
}

isValidWalk( [ 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ] );
isValidWalk( [ 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e' ] );
isValidWalk( [ 'w' ] );
isValidWalk( [ 'n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ] );