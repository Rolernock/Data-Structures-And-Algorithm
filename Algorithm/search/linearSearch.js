// Method 1 - Time complexity o(n); Space complexity o(1)

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

linearSearch([2, 34, 4, 5, 10], 7)
