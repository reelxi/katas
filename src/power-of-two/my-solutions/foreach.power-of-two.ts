export function toThePowerOfTwo(numbers: number[]): number[] {
  let result: number[] = []
  for (let number of numbers) {
    // n**2 === Math.pow(n, 2)
    result.push(number ** 2)
  }
  return result
}
