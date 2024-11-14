// Method 1 - Time complexity o(n); space complexity o(1)
const factorial = num => {
  let total = 1
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}

factorial(4)

// Method 2 - Time complexity o(n); space complexity o(n)
const factorial1 = num => {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

factorial1(4)
