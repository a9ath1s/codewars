/* jshint esversion: 6 */

function openOrSenior ( data ) {
    // open [>=55, >7]
    res = [];
    data.forEach( element => {
        res.push( ( element[ 0 ] >= 55 && element[ 1 ] > 7 ) ? "Senior" : "Open" );
    } );
    return res;
}

console.log( openOrSenior( [ [ 45, 12 ], [ 55, 21 ], [ 19, -2 ], [ 104, 20 ] ] ) ); // ['Open', 'Senior', 'Open', 'Senior']
console.log( openOrSenior( [ [ 3, 12 ], [ 55, 1 ], [ 91, -2 ], [ 54, 23 ] ] ) ); // ['Open', 'Open', 'Open', 'Open']
console.log( openOrSenior( [ [ 45, 12 ], [ 55, 21 ], [ 19, -2 ], [ 104, 20 ] ] ) ); // ['Open', 'Senior', 'Open', 'Senior']