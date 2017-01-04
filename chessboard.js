//write your code here
"use strict"
function createBoard(){
  var board = []
  for (var h = 0; h < 8; h++) {
    board.push([])
    for (var v = 0; v < 8; v++){
      board[h].push([])
    }
  }
  return board
}
console.log(createBoard());
