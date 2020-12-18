const digits = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const validPrevious = {
  V: 1,
  X: 1,
  L: 10,
  C: 10,
  D: 100,
  M: 100,
}
const assertValidPreviousValue = (
  romanDigit,
  previousValue,
  similarDigitsCount
) => {
  if (similarDigitsCount > 1) {
    throw new Error(
      `Sequences of two smaller digits followd by a larger one are invalid. Found ${similarDigitsCount} similar digits followed by ${romanDigit}`
    )
  }
  if (validPrevious[romanDigit] !== previousValue) {
    throw new Error(
      `Found digit ${romanDigit} preceded by an invalid value (${previousValue})`
    )
  }
}

// Write a function that takes a roman numeral as input,
// and returns the number as an integer
// Don't remember roman numerals? Check https://www.mathsisfun.com/roman-numerals.html
const romanNumeralTranslator = (romanString) => {
  const decimalResult = String(romanString)
    .toUpperCase()
    .split('')
    .reduce(
      (
        { total, lastDigit, similarDigitsCount, hadPreviousSmallerDigit },
        romanDigit
      ) => {
        const digit = digits[romanDigit]

        if (!digit) {
          throw new Error(
            `Error in ${romanString}: ${romanDigit} is not a valid roman digit`
          )
        }

        if (lastDigit && lastDigit < digit) {
          assertValidPreviousValue(romanDigit, lastDigit, similarDigitsCount)
          total -= 2 * lastDigit
        }

        // Keep track of how many similar digits have appeared in a row
        if (lastDigit === digit) {
          similarDigitsCount++
        } else {
          similarDigitsCount = 1
        }

        total += digit

        return {
          lastDigit: digit,
          hadPreviousSmallerDigit,
          similarDigitsCount,
          total,
        }
      },
      { total: 0, similarDigitsCount: 0 }
    )

  return decimalResult.total
}

module.exports = romanNumeralTranslator
