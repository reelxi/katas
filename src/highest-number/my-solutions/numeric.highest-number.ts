export function getHighestNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    return Number.NaN
  }

  let result: number = Number.NEGATIVE_INFINITY

  for (let element of numbers) {
    if (element > result) {
      result = element
    }
  }

  return result
}
