const leapYears = function (year) {
  if (year % 4 === 0 && year) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

// function leapYears(year) {
//   const isYearDivisibleByFour = year % 4 === 0;
//   const isCentury = year % 100 === 0;
//   const isYearDivisibleByFourHundred = year % 400 === 0;
//
//   if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// Do not edit below this line
module.exports = leapYears;
