// Method 1 - Time complexity o(n); Space complexity o(1)

const sumZero = arr => {
  let left = 0
  right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum < 0) {
      ++left
    } else {
      --right
    }
  }
}

sumZero([-5, -3, -2, -7, 1, 4, 9])
