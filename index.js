const os = require("os");
const http = require("http");
const url = require("url");

const romanNumeralTranslator = require("./romanNumeralTranslator.js");

const handleRequest = (req, res) => {
  const { roman } = url.parse(req.url, true).query;
  res.write(`Hi there! I'm being served from ${os.hostname()} \n\n`);
  res.write(
    `The result of ${roman} conversion is ${romanNumeralTranslator(roman)}`
  );
  res.end();
};

http.createServer(handleRequest).listen(3000);