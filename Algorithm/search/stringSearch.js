// Method 1 - Time complexity o(mn); Space complexity o(1)

const stringSearch = (long, short) => {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

stringSearch('lorie loled lolipop loli', 'lol')
