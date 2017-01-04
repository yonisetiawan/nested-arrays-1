//write your code here
"use strict"
function createBoard(){
  var board = []
  for (let h = 0; h < 8; h++) {
    board.push([])
    for (let v = 0; v < 8; v++){
      board[h].push([])
    }
  }
  return board
}

function chessBoard(){
  var board = createBoard()
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (i == 1 || i == 6){
        board[i][j] = "Pion"
      }
      if ( i == 7 || i == 0){
        switch (j) {
          case 0 :
          case 7 :
            board[i][j] = "Benteng"
            break;
          case 1 :
          case 6 :
            board[i][j] = "Kuda"
            break;
          case 2 :
          case 5 :
            board[i][j] = "Gajah"
            break;
          case 3 :
            board[i][j] = "Raja"
            break;
          case 4 :
            board[i][j] = "Ratu"
            break;
          default:
        }
      }
      if (i < 2){
        board[i][j] += " Hitam"
      } else if (i > 5){
        board[i][j] += " Putih"
      }
   }
 }
 return board
}
var chessBoard = chessBoard()
console.log(chessBoard[0][7]);
