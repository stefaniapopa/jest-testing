//21.Return the N-th value of the Fibonacci sequence. Solve in O(n) time
/*Answer
The easiest solution that comes to mind here is iteration: */

module.exports = function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
  }
