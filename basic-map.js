function doubleAll(numbers) {

}
//module.exports = doubleAll

function verifyDouble(numbers, answers){
   if(numbers === null || answers === null)
      return false;
   if(numbers.length !== answers.length)
      return false;
   let actAns = doubleAll(numbers);
   for(let i=0; i<numbers.length; i++){
      if(numbers[i] !== answers[i])
         return false;
   }
   return true;
}

//console.log("Double all numbers in the array : ", verifyDouble([1, 2, 3], [2, 4, 6]));
console.log("Return nothing when no array is passed : ", verifyDouble(null, null));
