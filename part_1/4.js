/*
GET COORDINATES
=======================

fungsi getCoordinates adalah sebuah fungsi untuk mendapatkan koordinat
dari setiap titik "x". Output yang dikembalikan pada fungsi ini adalah
sebuah array dengan koordinat dengan format "<huruf><angka>" pada board.

EXAMPLE:
var array = [
  [" ", "A", "B", "C"],
  ["1", " ", "x", " "],
  ["2", " ", " ", " "],
  ["3", "x", " ", " "],
]
console.log(getCoordinates(array))
// ["B1", "A3"]
*/
function getCoordinates(arr) {
  let coord = [];
  for (let i = 1; i < arr.length; i++) { // looping for the 1st dimension
    for (let j = 1; j < arr[i].length; j++) { // looping for the 2nd dimension
      if (arr[i][j] === 'x') {
        coord.push(arr[0][j] + arr[i][0]); // if X is found, manually concatenate the 1st & 2nd dimension labels where X is found
      }
    }
  }
  return coord;
}

console.log('');

var array = [
  [" ", "A", "B", "C", "D"],
  ["1", " ", " ", "x", " "],
  ["2", " ", "x", " ", " "],
  ["3", " ", " ", " ", "x"],
  ["4", " ", " ", "x", " "],
]
console.log('Map 1:');
console.log(array);
console.log('Coordinates:');
console.log(getCoordinates(array));
// [ 'C1', 'B2', 'D3', 'C4' ]

console.log('');

var array2 = [
  [" ", "A", "B", "C"],
  ["1", "x", " ", "x"],
  ["2", " ", "x", " "],
  ["3", "x", " ", "x"],
]
console.log('Map 2:');
console.log(array2);
console.log('Coordinates:');
console.log(getCoordinates(array2));
// [ 'A1', 'C1', 'B2', 'A3', 'C3' ]

console.log('');