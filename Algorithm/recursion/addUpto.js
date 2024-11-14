//Method 1 - Time complexity o(n); Space complexity o(n)

const sumRange = num => {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

sumRange(3)
