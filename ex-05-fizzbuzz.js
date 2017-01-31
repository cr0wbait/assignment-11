/**
 * Ex-05 : fizzbuzz()
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */

function fizzbuzz (initNum){
  // hellamath
  // modulus each value by 3&5, and if there is a remainder, return false/period

var beeTalk = '';
  for (i=0;i<initNum;i++){
    var izBuzz = initNum[i];
    if (izBuzz % 3 > 0 && izBuzz % 5 > 0){
      beeTalk = beeTalk + '.';
    } else if (izBuzz % 5 === 0 && izBuzz % 3 > 0){
        beeTalk = beeTalk + 'buzz';
      } else if (izBuzz % 3 === 0 && izBuzz % 5 > 0){
            beeTalk = beeTalk + 'fizz'
          } else if (izBuzz % 3 === 0 && izBuzz % 5 === 0){
            beeTalk = beeTalk + 'FizZBuzZ';
          }
    }
    console.log(beeTalk)
     return beeTalk
  }
console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")
