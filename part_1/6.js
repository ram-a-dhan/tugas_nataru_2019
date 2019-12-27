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

// declare count 0
// 
// change all str elements to lower case
// 
// FOR 0 <--> str.length-2
//   IF 3 consecutive str elements === partial
//     count++
//   ENDIF
// ENDFOR
// 
// IF count > 0
//   RETURN count
// ELSE
//   RETURN "not found!"
// ENDIF

*/
function partialCheck(str, partial) {
  
  let count = 0;

  // let cc, str2 = '';
  // for (x = 0; x < str.length; x++) {
  //   cc = str.charCodeAt(x);
  //   if (cc >= 65 && cc <= 90) {
  //     str2 += String.fromCharCode(cc + 32);
  //   } else {
  //     str2 += str[x];
  //   }
  // }
  // console.log(str2);

  str = str.toLowerCase(); // the only other way without regexp is above, typed as comments, which unfortunately contains more built-in functions

  for (i = 0; i < str.length-2; i++) {
    if (str[i] === partial[0] && str[i+1] === partial[1] && str[i+2] === partial[2]) {
      count++;
    }
  }

  if (count > 0) {
    return `found ${count} times!`
  } else {
    return 'not found!'
  }
}

console.log();
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found
console.log();