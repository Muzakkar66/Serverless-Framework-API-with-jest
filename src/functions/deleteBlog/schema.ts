export default {
  type: "object",
  properties: {
    auther: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    content: { type: 'string' }
  },
  required: ['auther', 'description', 'content']
} as const;
