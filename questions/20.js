//20.String Rotation  
/*Problem
Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.
Answer
First make sure a and b are of the same length. Then check to see if b is a substring of a concatenated with a: */

module.exports = function (a, b) {
    return a.length === b.length && (a + a).indexOf(b) > -1;
  };