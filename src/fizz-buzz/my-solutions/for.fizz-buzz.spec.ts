import { describe, expect, it } from 'vitest'
import { fizzBuzzList } from './for.fizz-buzz'

describe('return list of nums from 1 to n [%3=fizz, %5=buzz, %3&&%5 fizzbuzz or just the num', (): void => {
  it('should return fizz, buzz, fizzbuzz and numbers', (): void => {
    let given: number = 15
    let actual: (string | number)[] = fizzBuzzList(given)
    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
