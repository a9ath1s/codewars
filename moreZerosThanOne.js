/* jshint esversion: 6 */

const moreZeros = (s) => {

  var arr = [];

  s.split('').forEach(elem => {
    if (arr.indexOf(elem) == -1) {
      arr0 = elem.charCodeAt(0).toString(2).split('');
      zer = arr0.filter((num) => num == 0);
      one = arr0.filter((num) => num == 1);
      if (zer.length > one.length  ) { arr.push(elem); }
    }
  });

  return arr;

};

console.log(moreZeros('abcde'), ['a', 'b', 'd']);
