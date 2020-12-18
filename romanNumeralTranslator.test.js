const romanNumeralTranslator = require('./romanNumeralTranslator.js')

describe('romanNumeralTranslator', () => {
  it('should successfully handle example cases', () => {
    expect(romanNumeralTranslator('I')).toBe(1)
    expect(romanNumeralTranslator('II')).toBe(2)
    expect(romanNumeralTranslator('III')).toBe(3)
    expect(romanNumeralTranslator('IV')).toBe(4)
    expect(romanNumeralTranslator('VIII')).toBe(8)
    expect(romanNumeralTranslator('IX')).toBe(9)
    expect(romanNumeralTranslator('XIII')).toBe(13)
    expect(romanNumeralTranslator('MCMLIV')).toBe(1954)
    expect(romanNumeralTranslator('MCCLXXVIII')).toBe(1278)
    expect(romanNumeralTranslator('MD')).toBe(1500)
    expect(romanNumeralTranslator('MCD')).toBe(1400)
    expect(romanNumeralTranslator('MDC')).toBe(1600)
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

    it('should not allow more than one smaller digit', () => {
      expect(() =>
        romanNumeralTranslator('IIV')
      ).toThrowErrorMatchingInlineSnapshot(
        `"Sequences of two smaller digits followd by a larger one are invalid. Found 2 similar digits followed by V"`
      )
    })

    it('should not allow sequences of more than 3 similar digits', () => {
      expect(() =>
        romanNumeralTranslator('MMMM')
      ).toThrowErrorMatchingInlineSnapshot(
        `"Found sequence of more than 3 equal digits: M"`
      )

      expect(() =>
        romanNumeralTranslator('VIIII')
      ).toThrowErrorMatchingInlineSnapshot(
        `"Found sequence of more than 3 equal digits: I"`
      )

      expect(() =>
        romanNumeralTranslator('DCCCC')
      ).toThrowErrorMatchingInlineSnapshot(
        `"Found sequence of more than 3 equal digits: C"`
      )
    })

    xit('should not allow substracting and adding the same digit', () => {
      expect(() => romanNumeralTranslator('CDCC')).toThrow()
    })

    xit('should disallow invalid repeating values', () => {
      expect(() => romanNumeralTranslator('VV')).toThrow()
      expect(() => romanNumeralTranslator('LL')).toThrow()
      expect(() => romanNumeralTranslator('DD')).toThrow()
    })
  })
})
