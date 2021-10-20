import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.PostBlogMAIN`,
  events: [
    {
      http: {
        method: 'post',
        path: 'api/blog',
        cors:true,
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}
