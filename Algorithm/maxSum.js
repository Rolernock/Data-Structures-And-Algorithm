// Method 1 - Time complexity o(n); Space complexity o(1)
const maxSum = arr => {
  let max = -Infinity
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1]
    if (sum > max) {
      max = sum
    }
  }
  return max
}

maxSum([1, 2, 5, 2, 8, 1, 5])
