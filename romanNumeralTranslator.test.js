const romanNumeralTranslator = require('./romanNumeralTranslator.js')

describe('romanNumeralTranslator', () => {
  it('should successfully handle example cases', () => {
    expect(romanNumeralTranslator('MCMLIV')).toBe(1954)
    expect(romanNumeralTranslator('MCCLXXVIII')).toBe(1278)
    expect(romanNumeralTranslator('MD')).toBe(1500)
    expect(romanNumeralTranslator('MCD')).toBe(1400)
    expect(romanNumeralTranslator('MDC')).toBe(1600)
    expect(romanNumeralTranslator('IV')).toBe(4)
    expect(romanNumeralTranslator('VIII')).toBe(8)
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

    it('should not allow invalid smaller digits', () => {
      expect(() =>
        romanNumeralTranslator('MXM')
      ).toThrowErrorMatchingInlineSnapshot(
        `"Found digit M preceded by an invalid value (10)"`
      )
    })
  })
})
