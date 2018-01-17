function duckCount() {
  // SOLUTION GOES HERE
  let args = [].slice.call(arguments);
  let count = args.reduce(function (dckCount, obj) {
    if (obj.hasOwnProperty("quack")) {
      dckCount+=1;
    }
    return dckCount;
  }, 0);
  return count;
}

//Testing the count function
console.log("Passing Object with 0 quack functions, return 0 : ", duckCount({hello: 1}) === 0);
console.log("Passing Object with 1 quack function, return 1 : ", duckCount({hello: 1}, {quack: 10, hello: 30}) === 1);
console.log("Passing Object with 1 Quack function, return 0 : ", duckCount({hello: 1}, {Quack: 10, hello: 30}) === 0);
module.exports = duckCount;
