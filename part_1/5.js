/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  
  let digits = [], len, wtf = [];
  
  for (let i = 0; i < numbers.length; i++) { // loop for each number
    do {

      // arrNum = numbers[i].toString().split(''); // compart number into digits in an array
      // len = Math.floor(arrNum.length / 2); // half-length of number digits
      digits = '' + numbers[i];
      len = digits.length / 2; // half-length of number digits
      wtf = []; // Whether True or False
      // console.log(digits);
      // console.log(len);
      
      for (let j = 0; j < len; j++) { // loop to check palindromity
        if (digits[j] === digits[digits.length-1-j]) {
          wtf.push(true); // if 1 segment has palindrome characteristic, add TRUE to WTF checklist
        } else {
          wtf.push(false); // vice versa
        }
      }
      // console.log(wtf);

      if (wtf.indexOf(false) > -1) { // if WTF checklist has at least 1 FALSE then add 1 to number
        numbers[i]++;
      }
    } while (wtf.indexOf(false) > -1) // process loops on until whole number is palindrome (no FALSE in WTF)
    // console.log(numbers[i]);
  }
  return numbers;
}

console.log('');

//// TEST CASE
var isItPal = [117, 9, 20, 30, 42];
console.log('Before:');
console.log(isItPal);
console.log('After:');
console.log(palindromeChanger(isItPal));
// [ 121, 9, 22, 33, 44 ]
console.log('');

//// CUSTOM TEST CASE
// var isItPal = [157921, 42609, 3429000, 101100000];
// console.log('Before:');
// console.log(isItPal);
// console.log('After:');
// console.log(palindromeChanger(isItPal));
// console.log('');