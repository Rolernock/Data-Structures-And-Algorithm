// Method 1 - Time complexity o(n^2); Space complexity o(1)
const maxSubArraySum = (arr, num) => {
  if (arr.length < num) return null
  let max = -Infinity
  for (let i = 0; i <= arr.length - num; i++) {
    let sum = 0
    for (let j = 0; j < num; j++) {
      sum += arr[i + j]
    }
    if (sum > max) {
      max = sum
    }
  }
  return max
}

maxSubArraySum([], 4)

// Method 2 - Time complexity o(n); Space complexity o(1)
const maxSubArraySum1 = (arr, num) => {
  let maxSum = 0
  let currSum = 0
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  currSum = maxSum
  for (let i = num; i < arr.length; i++) {
    currSum = currSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, currSum)
  }
  return maxSum
}

maxSubArraySum1([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
