// import schema from './schema';
import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.updateBlogMAIN`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'api/updateBlog',
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
