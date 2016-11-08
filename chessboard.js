function chessboard() {
    var pemain = ["Benteng", "Kuda", "Peluncur", "Raja", "Panglima", "Peluncur", "Kuda", "Benteng"]
    var warna = [" Hitam", " Putih"]
    var pion = ["Pion"]
    var area = ["area"]
    var board1= [];
    var board2 = [];

    for (var i = 0; i < 8; i++) {
        board1.push("")
    }
    for (var j = 0; j < 8; j++) {
        board2.push(board1)
    }

    

}

console.log(chessboard())
