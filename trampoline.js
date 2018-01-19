function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  operation();
  setTimeout(function () {
    return repeat(operation, --num);
  }, 1);
  // return repeat(operation, --num);
}

function trampoline(fn) {
  // You probably want to implement a trampoline!
  while (fn != null && fn != undefined && (typeof fn) === "function") {
    let returnedFn = fn();
    fn = returnedFn;
  }
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  trampoline(function () {
    repeat(operation, num);
  });
  // return repeat(operation, num);
};
