//write your code here
"use strict"

function table(){
  var title = [["Number", "Name", "Position", "Points per Game"]]
  return title
}


console.log(table());

let data = ["1", "John Doe", "Director", [10, 10, 10, 10]]
addData(data);

console.log(table[3][2] == "Shooting Guard");

console.log(JSON.stringify(table[1][3]) == JSON.stringify([14, 32, 7, 0, 23]));
