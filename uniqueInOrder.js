var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  result = [];
  for (var i = 0; i < iterable.length; i++) {
    if (result.length == 0 ||
      iterable[i] != iterable[i-1]) {
        result.push(iterable[i]);
    }
  }
  return result;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
