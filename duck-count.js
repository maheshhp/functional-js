function duckCount() {
  // SOLUTION GOES HERE
  let args = [].slice.call(arguments);
  // console.log(args);
  let count = args.reduce(function (dckCount, obj) {
    if (({}).hasOwnProperty.call(obj, "quack")) {
      dckCount+=1;
    }
    return dckCount;
  }, 0);
  return count;
}

//Testing the count function
// console.log("Passing Object with 0 quack functions, return 0 : ", duckCount({hello: 1}) === 0);
// console.log("Passing Object with 1 quack function, return 1 : ", duckCount({hello: 1}, {quack: 10, hello: 30}) === 1);
// console.log("Passing Object with 1 Quack function, return 0 : ", duckCount({hello: 1}, {Quack: 10, hello: 30}) === 0);
// console.log("Passing Object with multiple quack functions, returns correct count : ", duckCount({hello: 1, quack: 10}, {quack: 10, hello: 30}) === 2);
module.exports = duckCount;
