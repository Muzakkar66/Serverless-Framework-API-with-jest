import type { AWS } from '@serverless/typescript';
import postBlog from '@functions/postblog';
import GetBlogList from '@functions/getBlogList';
import updateBlog from '@functions/updateBlog';
import deleteBlog from '@functions/deleteBlog';
const serverlessConfiguration: AWS = {
  
  service: 'CRUD-API',
  frameworkVersion: '2',
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
    },
  },
  plugins: [
    'serverless-esbuild', 
    'serverless-offline', 
    'serverless-jest-plugin'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region:'us-east-1',
    iamRoleStatements: 
    [
      {
        Effect:'Allow',
        Action:[
          'dynamodb:PutItem',
          'dynamodb:Scan',
          'dynamodb:UpdateItem',
          'dynamodb:DeleteItem'

        ],
        Resource:'*'
      }
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      BLOG_TABLE:'blog-post-table-new',
      AWS_ACCOUNT_ID:'218767131295',
    },
    
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { 
        postBlog,
        GetBlogList,
        updateBlog,
        deleteBlog
  },

  resources:{
    Resources:{
      blogTable:{
        Type:"AWS::DynamoDB::Table",
        Properties:{
          TableName:"blog-post-table-new",
          AttributeDefinitions:[
            {AttributeName:'auther', AttributeType:'S'},
            
          ],
          KeySchema:[
            {AttributeName:'auther', KeyType:'HASH'},
          
          ],
          BillingMode:'PAY_PER_REQUEST',
        },
      }
    }
  }
  
};

module.exports = serverlessConfiguration;
