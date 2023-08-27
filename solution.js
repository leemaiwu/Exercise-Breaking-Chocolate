const breakChocolate = (n,m) => {
  return n == 0 || m == 0 ? 0 : n * m - 1
}

console.log(breakChocolate(2, 1)) // 2
console.log(breakChocolate(5, 5)) // 24
console.log(breakChocolate(1, 1)) // 0
console.log(breakChocolate(46, 0)) // 0