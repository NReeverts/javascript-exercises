const palindromes = function (str) {
  str = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  let arr = str.split(" ");
  str = arr.join("");

  let i = 0;
  let j = str.length - 1;
 
  while (i < j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
