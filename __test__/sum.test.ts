// const main = require('./src/functions/hello/handler')
// const sum = require("./src/functions/postblog");
import {main} from '../src/functions/postblog/handler'
test("Correct Sum Should Be Returned", () => {
  expect(main()).toEqual(200);

});