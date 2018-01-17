
// function addValues(pre, next) {
//   if (pre === null || next === null) {
//     return 0;
//   }
//   return pre + next;
// }

function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  if (arr.length === 0) {
    return initial;
  }
  initial = fn(initial, arr[0], 0, arr);
  arr = arr.slice(1);
  return reduce(arr, fn, initial);
}
// let inputWords = [1, 2, 3, 4];
// let noInputWords = [];
//
// //Testing reduce function
// console.log("Return [] for zero objects : ", reduce(noInputWords, addValues, 0) === 0);
// console.log("Return correct count values : ", reduce(inputWords, addValues, 0) === 10);
//
// //Testing addValues function
// console.log("Return 0 for 0 as input : ", addValues(0, 0) === 0);
// console.log("Return 0 for null as first input : ", addValues(null, 0) === 0);
// console.log("Return 0 for null as second input : ", addValues(0, null) === 0);
// console.log("Return 5 for 2 and 3 as inputs : ", addValues(2, 3) === 5);
module.exports = reduce;
