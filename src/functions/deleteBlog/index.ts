// import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.deleteBlogMAIN`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'api/deleteBlog',
        cors:true,
        // request: {
        //   schema: {
        //     'application/json': schema
        //   }
        // }
      }
    }
  ]
}
