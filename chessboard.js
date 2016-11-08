function chessboard() {
    var pemain = ["Benteng", "Kuda", "Peluncur", "Raja", "Panglima", "Peluncur", "Kuda", "Benteng"]
    var warna = [" Hitam", " Putih"]
    var pion = [" "]
    var area = ["area"]
    var board = [];
    var papan = [];

    for (var i = 0; i < 8; i++) {
        board.push("")
    }
    for (var j = 0; j < 8; j++) {
        papan.push(board)
    }

    for (var i = 0; i < 8; i++) {
        if (papan[0][i] < 8) {
            papan[0][i] = pemain[i] + warna[1]
        }
        if (papan[1][i] < 8) {
            papan[1][i] = pion[0] + warna[1]
        }
        if (papan[2][i] < 8) {
            papan[2][i] = area[0]
        }
        if (papan[3][i] < 8) {
            papan[3][i] = area[0]
        }
        if (papan[4][i] < 8) {
            papan[4][i] = area[0]
        }
        if (papan[5][i] < 8) {
            papan[5][i] = area[0]
        }
        if (papan[6][i] < 8) {
            papan[6][i] = pion[0] + warna[0]
        }
        if (papan[7][i] < 8) {
            papan[7][i] = pemain[i] + warna[0]
        }

    }

    return papan[7][0]

}

console.log(chessboard())
