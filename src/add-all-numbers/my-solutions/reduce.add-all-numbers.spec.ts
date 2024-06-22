import { describe, expect, it } from 'vitest'
import { reduceAddAllNumbers } from './reduce.add-all-numbers'

describe('produce a single value/sum from a list of various numbers', (): void => {
  it('use reduce function to calculate sum', () => {
    const given: number[] = [-1, 0, 42, 1337]
    const actual: number = reduceAddAllNumbers(given)
    expect(actual).toBe(1378)
  })
})
