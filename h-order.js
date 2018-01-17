let counter = 0;
function repeat(operation, num) {
  // SOLUTION GOES HERE
  for(let i=0; i<num; i++){
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;

//function testRepeat(fn, times){
//   counter = 0;
//   repeat(fn, times);
//   return counter;
//}

//console.log("Function not run when times is 0 : ", testRepeat(() => {counter+=1;}, 0) === 0);
//console.log("Function running required number of times : ", testRepeat(() => {counter+=1;}, 5) === 5);
