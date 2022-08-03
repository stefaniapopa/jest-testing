//11. Describe Closure concept in JavaScript as best as you could  

function makeAdder(x) {
	// parameter `x` is an inner variable

	// inner function `add()` uses `x`, so
	// it has a "closure" over `x`
	function add(y) {
		return y + x;
	};

	return add;
}

var plusOne = makeAdder( 1 ); 
var plusTen = makeAdder( 10 ); 
plusOne(3); 
plusTen(13); 
console.log(plusOne(3))

module.exports=plusTen