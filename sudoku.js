function validSolution(board) {
  //TODO

  var arr = [];

  for (var i=0; i<9; i++) {
    var vert = [];
    for (var j=0; j<9; j++) {
      vert.push(board[j][i]);
      if (i%3==0 && j%3==0) {
        var block = [];
        for (var k=0; k<3; k++) {
          for (var n=0; n<3; n++) {
            block.push(board[i+k][j+n]);
          }
        }
        arr.push(block);     // block
      }
    }
    arr.push(vert);      // vertical
    arr.push(board[i]);  // horisontal
  }

  var summs = [];
  arr.forEach(elem => {
    summ = elem.reduce((a,b) => a+b);
    summs.push(summ);
  });

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  summs.sort(compareNumeric);

 return summs[0]==45;
}

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);