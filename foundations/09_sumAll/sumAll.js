const sumAll = function (a, b) {
  let sum = 0;
  if (
    a < 0 ||
    b < 0 ||
    typeof a !== "number" ||
    typeof b !== "number" ||
    Math.floor(a) !== a ||
    Math.floor(b) !== b
  ) {
    return "ERROR";
  }
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
