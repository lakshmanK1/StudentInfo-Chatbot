import botAvatar from '../../Icons/bot.svg'

import React from 'react'

function BotAvatar() {
    return (
        <div className="react-chatbot-kit-chat-bot-avatar">
          <div
            className="react-chatbot-kit-chat-bot-avatar-container"
            style={{ background: "none" }}
          >
            <img alt="BotAvatar" src={botAvatar} />
          </div>
        </div>
      );
}

export default BotAvatar