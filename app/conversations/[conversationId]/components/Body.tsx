'use client'
import useConversation from '@/app/hooks/use-conversation'
import { FullMessageType } from '@/app/types'
import { FC, useEffect, useRef, useState } from 'react'
import MessageBox from './MessageBox'
import axios from 'axios'

interface BodyProps {
  initialMessages:FullMessageType[] | null
}

const Body: FC<BodyProps> = ({initialMessages}) => {
  const [messages, setMessages] = useState(initialMessages)

  const bottomRef = useRef<HTMLDivElement>(null)

  const {conversationId} = useConversation()

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return <div className='flex-1 overflow-y-auto'>
    {messages?.map((message,i)=>(
      <MessageBox
      isLast={i === messages.length -1}
      key={message.id}
      data={message}
      />
    ))}
  <div ref={bottomRef} className='pt-24'/>
  </div>
}

export default Body