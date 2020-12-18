// Write a function that takes a roman numeral as input,
// and returns the number as an integer
// Don't remember roman numerals? Check https://www.mathsisfun.com/roman-numerals.html
const romanNumeralTranslator = (romanString) => {
  const digits = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  const decimalResult = String(romanString)
    .toUpperCase()
    .split('')
    .reduce(
      ({ total, lastDigit }, romanDigit) => {
        const digit = digits[romanDigit]

        if (!digit) {
          throw new Error(
            `Error in ${romanString}: ${romanDigit} is not a valid roman digit`
          )
        }

        if (lastDigit && lastDigit < digit) {
          total -= 2 * lastDigit
        }

        total += digit

        return {
          lastDigit: digit,
          total,
        }
      },
      { total: 0 }
    )

  return decimalResult.total
}

module.exports = romanNumeralTranslator
