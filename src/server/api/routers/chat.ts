import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const chatRouter = createTRPCRouter({
  getAll: protectedProcedure
    .query(({ ctx }) => {
      const { user: { id: userId } } = ctx.session

      return ctx.prisma.chat.findMany(
        {
          where: {
            userId
          },
          orderBy: [
            {
              createdAt: 'asc'
            }
          ],
          include: {
            message: {
              select: {
                body: true
              }
            }
          }
        },

      );
    }),

  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx }) => {
      const { user: { id: userId } } = ctx.session

      return ctx.prisma.chat.create({
        data: {
          userId,
        },
      });
    }),

});
