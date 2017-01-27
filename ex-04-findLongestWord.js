/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 // split this string into an array
 // then, same thing as previous; have an open variable equal to length zero; overwrite when you find the longest value of the array


function findLongestWord (initStr){
//  function thePinochet (initStr){
//    var rnd2Str = "";
//    for (i=0;i<initStr.length;i++){
//      if (initStr[i] !== "'"){
//        initStr.splice(initStr[i], 1);
//      }
//    }
//  }
  var sunRA = initStr.split(' ');
  var oSiris = '';
  for (i=0;i<sunRA.length;i++){
    if (sunRA[i].length > oSiris.length){
      oSiris = sunRA[i];
      }
    }
    console.log(oSiris);
    return oSiris
  }
console.assert(findLongestWord("i have baskets full of lemons") === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord("a time to act.") === 'time')
