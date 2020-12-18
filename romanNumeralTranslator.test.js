const romanNumeralTranslator = require('./romanNumeralTranslator.js')

describe('romanNumeralTranslator', () => {
  it('should successfully handle example cases', () => {
    expect(romanNumeralTranslator('MCMLIV')).toBe(1954)
    expect(romanNumeralTranslator('MCCLXXVIII')).toBe(1278)
  })

  it('should be case insensitive', () => {
    expect(romanNumeralTranslator('MccLxXVIII')).toBe(1278)
  })

  describe('error cases', () => {
    it('should throw an error when the passed value has some non-roman digits', () => {
      expect(() =>
        romanNumeralTranslator('MCMDLIG')
      ).toThrowErrorMatchingInlineSnapshot(
        `"Error in MCMDLIG: G is not a valid roman digit"`
      )
    })
  })
})
