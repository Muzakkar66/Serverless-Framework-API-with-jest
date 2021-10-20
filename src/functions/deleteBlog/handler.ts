import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
// import schema from './schema';
import * as AWS from 'aws-sdk';
import { Callback, Context } from 'aws-lambda';
const dynamodb = new AWS.DynamoDB.DocumentClient();

const handler = async (event, context: Context, callback: Callback) => {
  if(event && context){}
  var response: any = {}
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
export const deleteBlogMAIN = middyfy(handler);