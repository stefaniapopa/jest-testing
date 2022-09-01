//31.How would you check if a number is an integer? 
/** Answer
A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1. */

module.exports = function isInt(num) {
    return num % 1 === 0;
  }
  