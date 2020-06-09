/* jshint esversion: 6 */

function duplicateEncode ( word ) {
  result = "";
  for ( let index = 0; index < word.length; index++ ) {
    const element = word[ index ];
    fi = word.toLowerCase().indexOf( element.toLowerCase() );
    li = word.toLowerCase().lastIndexOf( element.toLowerCase() );

    if ( fi == li ) { result += '('; } else { result += ')'; }
  }
  console.log( word + ' >>> ' + result );
  return result;
}

duplicateEncode( "din" );  //,"(((");
duplicateEncode( "recede" );  //,"()()()");
duplicateEncode( "Success" );  //,")())())","should ignore case");
duplicateEncode( "(( @" );  //,"))((");