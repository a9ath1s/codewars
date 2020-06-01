/* jshint esversion: 6 */


function findEvenIndex(arr)
{
  //Code goes here!

  for (var i = 0; i < arr.length; i++) {
    if (arr.slice(0,i).reduce((a, b) => a+b, 0) == arr.slice(i+1).reduce((a, b) => a+b, 0)){
      return i;
    }
  }

  return -1;

}

console.log(findEvenIndex([10,-80,10,10,15,35,20]));
console.log(findEvenIndex([1,100,50,-51,1,1]) == 1);
console.log(findEvenIndex([1,2,3,4,5,6]) == -1);
console.log(findEvenIndex([20,10,30,10,10,15,35]) == 3);
