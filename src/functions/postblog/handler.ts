import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const body = event.body;
  const blogBody =
  {
    recieved: true,
    ... body
  };

  return formatJSONResponse({
    // message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    blogBody,
  });
}

export const main = middyfy(handler);
// module.exports = serverlessConfiguration;
