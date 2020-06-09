/* jshint esversion: 6 */

/*
* "Dot" – is 1 time unit long.
* "Dash" – is 3 time units long.
*
* Pause between dots and dashes in a character – is 1 time unit long.
* Pause between characters inside a word – is 3 time units long.
* Pause between words – is 7 time units long.
*/

const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
};

var decodeBits = function ( bits ) {
  console.log( `bits: ${ bits }` );
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  return bits
    .replace( /00000000000000/g, '0000000' )
    .replace( /0000000/g, '   ' )
    .replace( /000000/g, '000' )
    .replace( /000/g, ' ' )
    .replace( /111111/g, '111' )
    .replace( /111/g, '-' )
    .replace( /11/g, '1' )
    .replace( /1/g, '.' )
    .replace( /00/g, '0' )
    .replace( /0/g, '' )
    ;
};

var decodeMorse = function ( morseCode ) {
  console.log( `code: ${ morseCode }` );
  // ToDo: Accept dots, dashes and spaces, return human-readable message
  words = morseCode.split( '   ' );
  res = [];
  words.forEach( word => {
    chars = word.split( ' ' );
    var dWord = [];
    chars.forEach( char => {
      dWord.push( MORSE_CODE[ char ] );
    } );
    res.push( dWord.join( '' ) );
  } );
  res = res.join( ' ' ).trim();

  console.log( `result: ${ res }` );

  return res;
};

console.log( decodeMorse( decodeBits( '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011' ) ), 'HEY JUDE' );
