import React from 'react'
import Chatbot from 'react-chatbot-kit'
import Config from './Config'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'

import 'react-chatbot-kit/build/main.css';
import './Bot.css'

function Bot() {
  return (
    <main className='bot-main-container'>
      <h3 className='bot-head-text'>Interact with our chatbot to get register quickly!!</h3>
      <div className='bot-div'>
        <Chatbot config={Config} messageParser={MessageParser} actionProvider={ActionProvider}/>
    </div>
    </main>
  )
}

export default Bot