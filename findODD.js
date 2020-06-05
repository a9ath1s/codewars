/* jshint esversion:6 */

function findOdd(A) {
  //happy coding!
  for (i=0; i<A.length; i++) {
    ar = A.filter(item => item == A[i]);
    if (ar.length%2 != 0) return A[i];
  }
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
