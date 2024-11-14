// Chapter: 1
// Method 1 - Big O - O(2^n)
//  - Dynamic Programming - Using past knowledge to make solving future problems easier

function fibonacci(n) {
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// Method 2 - Big O - O(n)
// Memoization - Technique used to optimize function by storing the result of expensize function calls and reusing those results when the same input occurs again
//   - Speeds up calculation, - Reduces time complexity
// Memo-ized solution - TOP DOWN
function fibonacciMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1
  let res = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo)
  memo[n] = res
  return res
}

console.log(fibonacciMemo(100))

// Chapter: 2
// Tabulation - Type of dynamic programming technique where you solve a problem by filling the table from bottom up
// Tabulation solution - BOTTOM UP
function fibonacciTabulate(n) {
  let fibnums = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibnums[i] = fibnums[i - 1] + fibnums[i - 2]
    console.log(fibnums)
  }
  return fibnums[n]
}

console.log(fibonacciTabulate(5))
