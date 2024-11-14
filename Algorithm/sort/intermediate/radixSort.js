// Method 1 - Time complexity o(nk); Space complexity o(n + k)

const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10

const digitCount = arr => {
  let maxDigit = 0
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(maxDigit, arr[i])
  }
  return maxDigit.toString().length
}

const radixSort = nums => {
  const maxLength = digitCount(nums)
  for (let i = 0; i < maxLength; i++) {
    let digitBucket = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i)
      digitBucket[digit].push(nums[j])
    }
    nums = [].concat(...digitBucket)
  }
  return nums
}

radixSort([234, 134, 1, 234134, 34, 92, 109, 23])
