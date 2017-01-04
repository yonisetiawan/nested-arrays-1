//write your code here
"use strict"
var table = [["Number", "Name", "Position", "Points per Game"],
  ["12", "Joe Schmo", "Center", [14, 32,7,0,23]],
  ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]],
  ["31", "Harvey Kay", "Shooting Guard", [0,30,16,0,25]],
  ["18", "Sally Talls", "Power Forward", [11,0,23,17,31,19]]]

function addData(data = dataAwal){
  table.push(data)
  return table
}

let dataI = ["1", "John Doe", "Director", [10, 10, 10, 10]]

console.log(addData(dataI));

console.log(table[3][2] == "Shooting Guard");

console.log(JSON.stringify(table[1][3]) == JSON.stringify([14, 32, 7, 0, 23]));
