import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import * as AWS from 'aws-sdk';

import { Callback, Context } from 'aws-lambda';
const dynamodb = new AWS.DynamoDB.DocumentClient();

const handler = async (event, context: Context, callback: Callback) => {
  if(event && context){}
  var response: any = {}
  const body = event.body;
  try {
    const updateBlog = {
      TableName: 'blog-post-table-new', 
      Key: {
        auther: body.auther,
      }, 
      UpdateExpression: 'set title=:t, description=:d, content=:c', 
      ExpressionAttributeValues:{
        ':t': body.title,
        ':d': body.description,
        ':c': body.content,
      }
    } 

    var data = await dynamodb.update(updateBlog).promise();

    
  } catch (error) {
    response = formatJSONResponse({
      message: "Error",
      error,
    });

  }
  response = formatJSONResponse({
    received: true,
    message: "Success",
    data,

  });
  callback(null, response)
}
export const updateBlogMAIN = middyfy(handler);