import { exampleRouter } from '~/server/api/routers/example';
import { createTRPCRouter } from '~/server/api/trpc';

import { chatRouter } from './routers/chat';
import { messageRouter } from './routers/message';
import { questionRouter } from './routers/question';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  chat: chatRouter,
  message: messageRouter,
  question: questionRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
