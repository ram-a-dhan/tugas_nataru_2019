/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/

/*
ALGORITHM/PSEUDOCODE FOR FUNCTION:
// 
// FOR 0 <--> STR.length
//   CHANGE each STR character to lower case
// ENDFOR
// 
// DECLARE COUNT 0
// FOR 0 <--> STR.length-2
//   IF 3 consecutive STR elements === PARTIAL
//     COUNT++
//   ENDIF
// ENDFOR
// 
// IF COUNT is positive
//   RETURN COUNT + " found!"
// ELSE
//   RETURN "not found!"
// ENDIF
*/
function partialCheck(str, partial) {
  
  console.log(`Finding \"${partial}\" pattern in \"${str}\"...`);
  // this is the only other way without regexp & .toLowerCase() that i know of
  // which unfortunately contains more built-in functions
  // but at least, from this, i learned about:
  // 1. string char codes, especially the codes for the uppercase & lowercase alphabets
  // 2. that strings are immutable without using built-in functions to manipulate them with
  let cc, str2 = '';
  for (x = 0; x < str.length; x++) {
    cc = str.charCodeAt(x);
    if (cc >= 65 && cc <= 90) {
      str2 += String.fromCharCode(cc + 32); // if any uppercase letter is found, change it into lowercase
    } else {
      str2 += str[x]; // moving string characters from str to str2 because str[x] = String.fromCharCode(cc + 32); is not possible
    }
  }
  str = str2; // reassign the parameter with all-lowercase string characters
  // console.log(str);
  
  let count = 0;
  for (i = 0; i < str.length-2; i++) {
    if (str[i] === partial[0] && str[i+1] === partial[1] && str[i+2] === partial[2]) {
      count++; // counter variable for counting how many partial pattern exists in str
    }
  }

  if (count > 1) {
    return `...Found ${count} times!`;
  } else if (count === 1) {
    return '...Found 1 time!';
  } else {
    return '...Not found!'
  }
}

console.log();
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log();
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log();
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log();
console.log(partialCheck('asjekfogiy', 'foy')); // not found
console.log();
