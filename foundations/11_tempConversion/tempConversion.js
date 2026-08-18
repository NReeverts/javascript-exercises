const convertToCelsius = function (f) {
  let temp = ((5 / 9) * (f - 32)).toFixed(1);
  return +temp;
};

const convertToFahrenheit = function (c) {
  let temp = ((9 / 5) * c + 32).toFixed(1);
  return +temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
