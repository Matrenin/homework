import './App.css'
import { useState, useEffect } from 'react'
import MessageList from './components/component/MessageList/MessageList'
import FormFunc from './components/component/Form/FormFun'
import { Author } from './constants'

export default function App() {
  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    if (newMessage.text === '') {
      return
    }
    setMessages([...messages, newMessage])
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === Author.user) {
      const timeout = setTimeout(() => {
        addMessage({
          author: Author.bot,
          text: 'Im bot'
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messages])

  return (
    <>
      <div className="box">
        <h1>Welcome to chat</h1>
        <FormFunc addMessage={addMessage}/>
        <MessageList messages={messages}/>
      </div>
    </>
  )
}