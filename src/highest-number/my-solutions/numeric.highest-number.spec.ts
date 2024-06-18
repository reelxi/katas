import { describe, expect, it } from 'vitest'
import { getHighestNumber } from './numeric.highest-number'

describe('getHighestNumber', (): void => {
  it('should get the highest number given an array of one number', (): void => {
    const given: number[] = [42]
    const actual: number = getHighestNumber(given)
    expect(actual).toBe(42)
  })

  it('should get the highest number given an array of positive numbers', (): void => {
    const given: number[] = [1, 3, 2]
    const actual: number = getHighestNumber(given)
    expect(actual).toBe(3)
  })

  it('should get the highest numbers given an array of negative numbers', (): void => {
    const given: number[] = [-69, -3, -11]
    const actual: number = getHighestNumber(given)
    expect(actual).toBe(-3)
  })

  it('should get the highest numbers given an empty array', (): void => {
    const given: number[] = []
    const actual: number = getHighestNumber(given)
    expect(actual).toBe(Number.NaN)
  })
})
