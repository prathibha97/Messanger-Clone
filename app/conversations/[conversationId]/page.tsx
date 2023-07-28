import getConversationById from "@/app/actions/getConversationById"
import getMesseges from "@/app/actions/getMesseges"
import EmptyState from "@/app/components/EmptyState"
import Header from "./components/Header"
import Body from "./components/Body"
import Form from "./components/Form"

interface IParams{
  conversationId: string
}

const ConversationId = async({params}:{params:IParams}) =>{
  const conversation = await getConversationById(params.conversationId)
  const messages = await getMesseges(params.conversationId)

  if(!conversation){
    return(
      <div className="lg:pl-80 h-full">
        <div className="flex flex-col h-full">
          <EmptyState/>
        </div>
      </div>
    )
  }
  return(
    <div className="lg:pl-80 h-full">
      <div className="flex flex-col h-full">
        <Header conversation={conversation}/>
        <Body initialMessages={messages}/>
        <Form/>
      </div>
    </div>
  )
}

export default ConversationId