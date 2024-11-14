// Method 1 - Time complexity (Best o(n), Worst o(n^2)); Space complexity o(1)
const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
