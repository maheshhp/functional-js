let slice = Array.prototype.slice;

function logger(namespace) {
  // SOLUTION GOES HERE
  return function() {
    let slicedArgs = slice.call(arguments);
    console.log.apply(null,[namespace].concat(slicedArgs));
  };
}


//Tests for logger function --> not implemented
// console.log("Prints prepend string when message is empty");
//
// console.log("Prints complete message string with prepend when message is not empty");
//
// console.log("No output on screen when both message and prepend string are empty");
module.exports = logger;
