module.exports = function(namespace) {
  // SOLUTION GOES HERE
  return console.log.bind(null, namespace);
};

// let info = logger("INFO:");
// info("this is an info message");

//Tests for logger function --> not implemented
// console.log("Verify if logger returns a function");
//
// console.log("Prints prepend string when message is empty");
//
// console.log("Prints complete message string with prepend when message is not empty");
//
// console.log("No output on screen when both message and prepend string are empty");
//
