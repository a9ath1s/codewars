/* jshint esversion: 6 */

function simpleNumbs ( num ) {

  // var lst = [];
  // for (let i = 2; i <= num; i++) {
  //   let flag = 1;
  //   if (i > 2 && i % 2 != 0) {
  //     for (let j = 3; j * j < i; j += 2) {
  //       if (i % j == 0) {
  //         flag = 0;
  //         break;
  //       }
  //     }
  //   }
  //   else if (i!=2) flag=0;
  //   if (flag==1) {
  //     lst.push(i);
  //   }
  // }
  // return lst;

  s = [];
  for ( let k = 1; k <= num; k++ ) {
    s[ k - 1 ] = k;
  }

  res = [];
  for ( let k = 1; k * k <= num; k++ ) {
    if ( s[ k - 1 ] != 0 ) {
      for ( let l = k * k; l <= num; l += k ) {
        s[ l - 1 ] = 0;
      }
      res.push( s[ k - 1 ] );
    }
  }
  return res;
}

console.log( simpleNumbs( 2 ) );
console.log( simpleNumbs( 10 ) );
console.log( simpleNumbs( 100 ) );