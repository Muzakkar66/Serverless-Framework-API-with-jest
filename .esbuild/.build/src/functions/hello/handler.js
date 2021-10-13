var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/functions/hello/handler.ts
__export(exports, {
  main2: () => main2
});

// src/libs/apiGateway.ts
var formatJSONResponse = (response) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

// src/functions/hello/handler.ts
var hello = async (event) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event
  });
};
var main2 = hello;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main2
});
//# sourceMappingURL=handler.js.map
