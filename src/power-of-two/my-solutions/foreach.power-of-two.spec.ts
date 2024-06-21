import { describe, expect, it } from 'vitest'
import { toThePowerOfTwo } from './foreach.power-of-two'

describe('PowerOfTwo', (): void => {
  it('given a list of positive numbers, return a list of these to the power of two', (): void => {
    const given: number[] = [2, 4, 8, 16]
    const actual: number[] = toThePowerOfTwo(given)

    expect(actual).toEqual([4, 16, 64, 256])
  })

  it('given a list of negative numbers, return a list of these to the power of two', (): void => {
    const given: number[] = [-2, -4, -8, -16]
    const actual: number[] = toThePowerOfTwo(given)

    expect(actual).toEqual([4, 16, 64, 256])
  })

  it('given an empty list, return a empty list', (): void => {
    const given: number[] = []
    const actual: number[] = toThePowerOfTwo(given)

    expect(actual).toEqual([])
  })
})
