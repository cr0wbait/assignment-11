/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord (initStr){
// split this string into an array
// then, same thing as previous; have an open variable equal to length zero; overwrite when you find the longest value of the array
  var amonRA = initStr.split(" ");
  console.log(amonRA);

  for (i=0;i<amonRA.length;i++){
    var oSiris = '';
    var hOrus = amonRA[i];
    if (hOrus.length > oSiris.length){
      oSiris = hOrus;
    } 
  }
  return oSiris;
}
//  var theOne = 0
//   for (i=0;i<initRa.length;i++){
//     var macLeod = initRa[i];
//     if (macLeod > theOne){
//       theOne = macLeod;
//     }
//   }
//   return theOne;
// }




console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
