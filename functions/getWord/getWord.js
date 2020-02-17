// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const randomWords = require('random-words');

exports.handler = async (event, context) => {
  try {
    const subject = randomWords().toUpperCase();
    return {
      statusCode: 200,
      body: subject
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
