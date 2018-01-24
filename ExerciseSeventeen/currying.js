function curryN(fn, n) {
  // SOLUTION GOES HERE
  if (!n) {
    n = fn.length;
  }
  return function curriedN(argument) {
    if (n <= 1){
      return fn(argument);
    }
    return curryN(fn.bind(this, argument), n - 1);
  };
}

// Tests for curryN function

console.log('Checking return type to be function : ', typeof curryN(function() {
  console.log('Hello World');
}, 5) === 'function');

console.log('Checking return to be Hello World : ', curryN(function() {
  return 'Hello World';
}, 1)(3) === 'Hello World');

module.exports = curryN;
