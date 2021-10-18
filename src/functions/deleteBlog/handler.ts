import 'source-map-support/register';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import * as AWS from 'aws-sdk';
const dynamodb = new AWS.DynamoDB.DocumentClient();

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  // if(event){}
  const body = event.body;
  try {
    const deleteBlog = {
      TableName: 'blog-post-table-new', 
      Key: {
        auther: body.auther,
      }, 
    } 

    var data = await dynamodb.delete(deleteBlog).promise();

    
  } catch (error) {
    return formatJSONResponse({
      message: "Error",
      error,
    });

  }
  return formatJSONResponse({
    received: true,
    message: "Success",
    data,

  });

}
export const main = middyfy(handler);