export function foreachAddAllNumbers(numbers: number[]): number {
  let result: number = 0
  for (let number of numbers) {
    result += number
  }
  return result
}
