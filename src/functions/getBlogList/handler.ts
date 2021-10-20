import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import * as AWS from 'aws-sdk';
import { Callback, Context } from 'aws-lambda';
const dynamodb = new AWS.DynamoDB.DocumentClient();

const handler = async (event, context: Context, callback: Callback) => {
  if(event && context){}
  var response: any = {}
  try {
    const GetBlogList = {
      TableName: 'blog-post-table-new',
    }
    var data = await dynamodb.scan(GetBlogList).promise();


  } catch (error) {
    response =  formatJSONResponse({
      message: "Error",
      error,
    });

  }
  response =  formatJSONResponse({
    received: true,
    message: "Success",
    data,

  });
  callback(null, response)
}
export const getBlogListMAIN = middyfy(handler);