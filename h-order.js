let counter = 0;
function repeat(operation, num) {
      // SOLUTION GOES HERE
	
    }

    // Do not remove the line below
//module.exports = repeat

function testRepeat(fn, times){
   counter = 0; 
   repeat(fn, times);
   return counter;
}

console.log("Function not run when times is 0 : ", testRepeat(() => {counter+=1;}, 0) === 0);
