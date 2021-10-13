import type { AWS } from '@serverless/typescript';
import hello from '@functions/hello';
import postBlog from '@functions/postblog';
// import { Server } from 'http';
const serverlessConfiguration: AWS = {
  
  service: 'rest-api',
  frameworkVersion: '2',
  custom: {
    // webpack:{
    //   webpackConfig: './webpack.config.js',
    //   includeModules: true,
    // },
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
    region:'eu-west-2',
    iamRoleStatements: 
    [
      {
        Effect:'Allow',
        Action:['dynamodb:PutItem'],
        Resource:'arn:aws:dynamodb:${self:provider.region}:${self:provider.environment.AWS_ACCOUNT_ID}:table/${self:provider.environment.BLOG_TABLE}'
      }
    ],
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      BLOG_TABLE:'blog-table',
      AWS_ACCOUNT_ID:'218767131295',
    },
    
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello, postBlog },

  resources:{
    Resources:{
      blogTable:{
        Type:"AWS::DynamoDB::Table",
        Properties:{
          TableName:"blog-post-table",
          AttributeDefinitions:[
            {AttributeName:'author', AttributeType:'S'},
            {AttributeName:'createdAt', AttributeType:'N'}
          ],
          KeySchema:[
            {AttributeName:'author', KeyType:'HASH'},
            {AttributeName:'createdAt', KeyType:'RANGE'}
          ],
          BillingMode:'PAY_PER_REQUEST',
        },
      }
    }
  }
};

module.exports = serverlessConfiguration;
