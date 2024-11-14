// Method 1 - Big O: Time complexity o(n) - linear; Space complexity o(1) - constant
const addUpTo = num => {
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}

addUpTo(5)

// Method 2 - Big O: Time complexity o(1); Space complexity o(1)
// formula n(n + 1) /2
const addUpto1 = num => (num * (num + 1)) / 2

addUpto1(5)
