//24.Given a string, reverse each word in the sentence  
/**Problem
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG  */

let string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
let reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

module.exports=reverseEachWord
