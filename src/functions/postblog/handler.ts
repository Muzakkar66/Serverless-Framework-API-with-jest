import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
// import * as AWS from 'aws-sdk';

// const dynamodb = new AWS.DynamoDB.DocumentClient();

const handler = async (event) => {

  const body = event.body;

  const postBlog = {
    TableName:'blog-post-table',
    received: true,
    Item:{
      ... body
    }

  }
  // const data = await dynamodb.put(postBlog).promise()

  return formatJSONResponse({
    message:"Item successfully added to the DB",
    postBlog,
  });
}

export const main = handler;