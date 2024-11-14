// Method 1 - Time complexity o(n); Space complexity o(n)

const countDown = num => {
  if (num <= 0) return console.log('All Done')
  console.log(num)
  num--
  countDown(num)
}

countDown(9)
