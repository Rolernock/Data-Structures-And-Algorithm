// Method 1 - Time complexity o(n^2); Space complexity o(1)
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = curr
  }
  return arr
}

// Method 2
const insertionSort1 = arr => {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = curr
  }
  return arr
}

insertionSort([93, 2, 43, 51, 9, 44])
