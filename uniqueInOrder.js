var uniqueInOrder = function ( iterable ) {
  result = [];
  for ( var i = 0; i < iterable.length; i++ ) {
    if ( result.length == 0 ||
      iterable[ i ] != iterable[ i - 1 ] ) {
      result.push( iterable[ i ] );
    }
  }
  return result;
};

console.log( uniqueInOrder( 'AAAABBBCCDAABBB' ) );
