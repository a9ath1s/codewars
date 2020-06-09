function solution ( str ) {
  arr = [];
  for ( var i = 0; i < str.length; i += 2 ) {
    var element = str[ i ];
    arr.push( '' + element + ( i + 1 < str.length ? str[ i + 1 ] : '_' ) );
  }
  return arr;
}

console.log( solution( "abcdef" ) );  //, ["ab", "cd", "ef"];
console.log( solution( "abcdefg" ) );  //, ["ab", "cd", "ef", "g_"];
console.log( solution( "" ) );  //, [];
