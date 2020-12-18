const os = require('os')
const http = require('http')
const url = require('url')

const romanNumeralTranslator = require('./romanNumeralTranslator.js')

const handleRequest = (req, res) => {
  try {
    const { roman } = url.parse(req.url, true).query

    res.write(`Hi there! I'm being served from ${os.hostname()} \n\n`)

    if (typeof roman !== 'string') {
      res.write('You should pass a "roman" query parameter with a roman number')
      return
    }

    res.write(
      `The result of ${roman} conversion is ${romanNumeralTranslator(roman)}`
    )
  } catch (e) {
    res.write('\nThere was an error in the request:')
    res.write(`${e}`)
  } finally {
    res.end()
  }
}

http.createServer(handleRequest).listen(3000)
