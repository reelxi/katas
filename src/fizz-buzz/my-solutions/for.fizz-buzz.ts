export function fizzBuzzList(n: number): (string | number)[] {
  let list: (string | number)[] = []

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      list.push('fizzbuzz')
    } else if (i % 5 === 0) {
      list.push('buzz')
    } else if (i % 3 === 0) {
      list.push('fizz')
    } else {
      list.push(i)
    }
  }
  return list
}
