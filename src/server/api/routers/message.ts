import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import openai from '~/utils/chatGpt';

export const messageRouter = createTRPCRouter({
  getAllByChatId: protectedProcedure
    .input(z.object({ chatId: z.string() }))
    .query(({ ctx, input: { chatId } }) => {
      const { user: { id: userId } } = ctx.session

      return ctx.prisma.message.findMany(
        {
          where: {
            chatId
          },
          orderBy: [
            {
              createdAt: 'asc'
            }
          ],
        },

      );
    }),

  create: protectedProcedure
    .input(z.object({ chatId: z.string(), messageBody: z.string().min(3).max(1000) }))
    .mutation(async ({ ctx, input: { chatId, messageBody } }) => {
      const { user: { id: userId } } = ctx.session

      // await ctx.prisma.message.create({
      //   data: {
      //     chatId,
      //     body: messageBody
      //   },
      // });

      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: messageBody,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0
      })
        .then(res => res.data.choices[0]?.text)
        .catch((error) => `ChatGPT was unable to find an answer for that (Error: ${error.message})`)

      return response
    }),

});
