import prisma from '../libs/db';

const getMesseges = async (conversationId: string) => {
  try {
    const messeges = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return messeges;
  } catch (error: any) {
    return null;
  }
};

export default getMesseges;
