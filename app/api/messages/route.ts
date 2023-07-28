import getCurrentUser from '@/app/actions/getCurrentUser';
import prisma from '@/app/libs/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { message, image, conversationId } = body;

     if (!currentUser?.id || !currentUser?.email) {
       return new NextResponse('Unauthorized', { status: 401 });
     }

     const newMessage = await prisma.message.create({
       include: {
         seen: true,
         sender: true,
       },
       data: {
         body: message,
         image: image,
         conversation: {
           connect: { id: conversationId },
         },
         sender: {
           connect: { id: currentUser.id },
         },
         seen: {
           connect: {
             id: currentUser.id,
           },
         },
       },
     });


     const updatedConversation = await prisma.conversation.update({
       where: {
         id: conversationId,
       },
       data: {
         lastMessageAt: new Date(),
         messages: {
           connect: {
             id: newMessage.id,
           },
         },
       },
       include: {
         users: true,
         messages: {
           include: {
             seen: true,
           },
         },
       },
     });

    return NextResponse.json(newMessage);
  } catch (error) {
    console.log(error, 'ERROR MESSAGES');
    return new NextResponse('Internal Error', { status: 500 });
  }
}