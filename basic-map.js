function doubleAll(numbers) {
   return numbers.map( a => a*2 );
}
module.exports = doubleAll

// function verifyDouble(numbers, answers){
//    if(numbers === null || answers === null)
//       return false;
//    if(numbers.length !== answers.length)
//       return false;
//    let actAns = doubleAll(numbers);
//    console.log(actAns);
//    console.log(answers);
//    for(let i=0; i<numbers.length; i++){
//       if(actAns[i] != answers[i])
//          return false;
//    }
//    return true;
// }
//
// console.log("Double all numbers in the array : ", verifyDouble([1, 2, 3], [2, 4, 6]));
// console.log("Return nothing when no array is passed : ", verifyDouble(null, null));
