const romanNumeralTranslator = require('./romanNumeralTranslator.js')

test('roman numerals', () => {
  expect(romanNumeralTranslator('MCMLIV')).toBe(1954)
  expect(romanNumeralTranslator('MCCLXXVIII')).toBe(1278)
})
