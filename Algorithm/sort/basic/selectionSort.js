// Method 1 - Time complexity o(n^2); Space complexity o(1)

const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr
}

selectionSort([12, 9, 4, 3, 4, 7])
