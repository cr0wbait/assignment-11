
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function maxOfArray(initRa){
  //have a open variable equal to zero and compare the array index value to it; when said value is >0, overwrite said variable
  var theOne = 0
  for (i=0;i<initRa.length;i++){
    var macLeod = initRa[i];
    if (macLeod > theOne){
      theOne = macLeod;
    }
  }
  return theOne;
}


console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
