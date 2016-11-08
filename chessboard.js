function chessboard() {
    var pemain = ["Benteng", "Kuda", "Peluncur", "Raja", "Panglima", "Peluncur", "Kuda", "Benteng"]
    var warna = [" Hitam", " Putih"]
    var pion = [" Pion"]
    var papan = [];
    for (var i = 0; i < 8; i++) {
        papan.push([])
        for (var j = 0; j < 8; j++) {
            papan[i].push("")
        }
    }
    for (var i = 0; i < 8; i++) {
            papan[0][i] = pemain[i] + warna[0]
            papan[1][i] = pion[0] + warna[0]
            papan[6][i] = pion[0] + warna[1]
            papan[7][i] = pemain[i] + warna[1]
    }
    // return papan;
    // console.log("++++++++++++++++++++++");
    return papan[7][0]
}
console.log(chessboard())
