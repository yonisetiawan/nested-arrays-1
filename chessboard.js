//write your code here
"use strict"
function createBoard(){
  var board = []
  for (let h = 0; h < 8; h++) {
    board.push([])
    for (let v = 0; v < 8; v++){
      board[h].push([v])
    }
  }
  return board
}

function fillBidak(){
  var board = createBoard()
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (i == 1 || i == 6){
        board[i][j] = "Pion"
      }
      if ((j == 0 || j == 7) && ( i == 7 || i == 0)){
        board[i][j] = "Benteng"
      }
      // if ((j == 1 || j == 6) && ( i == 7 || i == 0)){
      //   board[i][j] = "Kuda"
      // }
   }
 }
 return board
}

console.log(fillBidak());
