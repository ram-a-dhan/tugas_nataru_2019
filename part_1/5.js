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
  
    let digits = [], len, isNotPal;
    
    for (let i = 0; i < numbers.length; i++) { // loop for each number
      do {
  
        digits = '' + numbers[i]; // convert number into string
        len = digits.length / 2; // half-length of string digits
        isNotPal = 0; // Non-Palindrome Indicator
        // console.log(digits);
        // console.log(len);
        
        for (let j = 0; j < len; j++) { // loop to check palindromity
          if (digits[j] !== digits[digits.length-1-j]) {
            isNotPal++; // if 1 segment does not have palindrome characteristic, add 1 to isNotPal
          }
        }
        // console.log(isNotPal);
        
        if (isNotPal) { // if isNotPal has positive (truthy) number value then add 1 to number
          numbers[i]++;
        }

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
  var isItPal = [157921, 42609, 3429000, 101100000];
  console.log('Before:');
  console.log(isItPal);
  console.log('After:');
  console.log(palindromeChanger(isItPal));
  console.log('');
