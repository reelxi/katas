export function reduceAddAllNumbers(numbers: number[]): number {
  return numbers.reduce((previousValue: number, currentValue: number) => {
    return previousValue + currentValue
  })
}
