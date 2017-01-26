
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/
function hasDoubleLetters (initStr){
  var tARGETCONFIRMED = false;
  for (i=0; i<initStr.length; i++){
    var eyeofSauron = initStr[i].toLowerCase();
    if(initStr[i++] === "undefined"){
      console.log('oops tickle tickle')
    } else {
      if (eyeofSauron === initStr[i++]){
        tARGETCONFIRMED = true
      }
    }
  }
  return tARGETCONFIRMED
}

// for (i=0; i<initStr.length-1; i++){
//
// }

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
