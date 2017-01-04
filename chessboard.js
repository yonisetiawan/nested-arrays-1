//write your code here
// class person{
// 	constructor(firsName,lastName){
// 		this.firsName = firsName;
// 		this.lastName = lastName;
// 	}
// }

// var orang1 = new person('yoma','sofwan');

// console.log(orang1.firsName);
// console.log(orang1.lastName);

// let chessboard = [
// ['Benteng Putih','Kuda Putih','Gajah Putih','Menteri Putih','Raja Putih','Gajah Putih','Kuda Putih','Benteng Putih']
// ];

// console.log( (chessboard[0][7]) == 'Benteng Putih' );

function chessboard(){
arr = [];
	let pion = 'Pion';
	let nama = ['Benteng','Kuda','Gajah','Menteri','Raja','Gajah','Kuda','Benteng'];
	let warna = [' Hitam',' Putih']

	for(let i=0; i<nama.length; i++){
		arr.push([]);
	};	

	for(let i=0; i<nama.length; i++){
		arr[0].push(nama[i]+warna[0]);
	};	
	for(let i=0; i<nama.length; i++){
		arr[1].push(pion);
	};	
	for(let i=2; i<6; i++){
		for(let j=0; j<nama.length; j++){
			arr[i].push('X');
		};	
	};		
	for(let i=0; i<nama.length; i++){
		arr[6].push(pion);
	};
	for(let i=0; i<nama.length; i++){
		arr[7].push(nama[i]+warna[1]);
	};		
return arr;
}
var chessboard = chessboard()

console.log(chessboard[7][0] == 'Benteng Putih');
