/*
  PALINDROME CHANGER
  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.
  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/

// // PSEUDOCODE
// DECLARE numStr, notPal
// FOR 0 <= a < numbers.length
//     numStr = "numbers[a]"
//     DOWHILE notPal > 0
//         notPal = 0
//         FOR 0 <= b < numStr.length/2
//             IF numStr[b] != numStr[numStr.length-1-b]
//               notPal++
//               numbers[a]++
//               numStr = "numbers[a]"
//             ENDIF
//         ENDFOR
//     ENDDOWHILE
// ENDFOR
// RETURN numbers

function palindromeChanger(numbers) {
  
    let digits, halfLength, isNotPal;
    for (let i = 0; i < numbers.length; i++) { // loop for each number
      digits = '' + numbers[i]; // convert number into string
      halfLength = digits.length / 2; // half-length of digits string
      do {
        isNotPal = 0; // Non-Palindrome Indicator initial set / reset

        for (let j = 0; j < halfLength; j++) { // looping whole digits string to check palindromity
          if (digits[j] !== digits[digits.length-1-j]) { // comparing [0] and [end], [1] and [end-1], [2] and [end-2], and so on
            isNotPal++; // if 1 segment does not have palindrome characteristic, add 1 to isNotPal
            numbers[i]++; // adding 1 to number
            digits = '' + numbers[i]; // reassign new number to digits string
          }
        }
        // console.log(isNotPal);
        // console.log(numbers[i]);
      } while (isNotPal) // process loops on until whole number is palindrome (isNotPal === 0)
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
  
  // CUSTOM TEST CASE
  var isItPal = [9876543210, 123456789, 9001, 100009];
  console.log('Before:');
  console.log(isItPal);
  console.log('After:');
  console.log(palindromeChanger(isItPal));
  console.log('');
