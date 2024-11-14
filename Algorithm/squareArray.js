// Method 1 - Time complexity o(n^2); Space complexity o(n)
const squareArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  const squareArr1 = arr1.map(arr => arr ** 2)
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(squareArr1[i])) return false
  }
  return true
}
squareArray([4, 2, 3, 2, 6], [36, 4, 16, 4, 9])
