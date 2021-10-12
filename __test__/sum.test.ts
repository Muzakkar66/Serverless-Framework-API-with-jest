const main = require('./src/functions/hello/handler')
const sum = require("./src/functions/postblog");
const handler = require('../handler');
test("Correct Sum Should Be Returned", () => {
  expect(handler.ValidatedEventAPIGatewayProxyEvent(body));
});