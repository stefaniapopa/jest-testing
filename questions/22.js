//22.Return the N-th value of the Fibonacci sequence Recursively
/**Recursive solution looks pretty simple (see code). Basically our fib function will continue to recursively call itself creating more and more branches of the tree until it hits the base case, from which it will start summing up each branch’s return values bottom up, until it finally sums them all up and returns an integer equal to 5. */

module.exports=function fibonacci(n) {
    if (n < 2){
      return n
    }
    return fibonacci(n - 1) + fibonacci (n - 2)
  }