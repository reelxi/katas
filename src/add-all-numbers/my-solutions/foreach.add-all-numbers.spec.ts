import { describe, it, expect } from 'vitest'
import { foreachAddAllNumbers } from './foreach.add-all-numbers'

describe('Given a list of numbers it should get the total by adding them together', (): void => {
  it('get sum with a list of various numbers (pos, neg, zero)', (): void => {
    const given: number[] = [42, 0, -12, 69]
    const actual: number = foreachAddAllNumbers(given)
    expect(actual).toBe(99)
  })
})
