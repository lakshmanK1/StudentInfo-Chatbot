import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { UserName } from './Widgets/InputDetails/InputDetails';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

      
      const handleStart = () => {
        const start = createChatBotMessage("Awesome, answer below questions.",{
            widget:'firstQuestion'
        });

        setState((prev)=>({
            ...prev,
            messages: [...prev.messages, start],
        }));
      };

      const handleGreetWithName = () => {
        const Greet = createChatBotMessage(<UserName/>,{
            widget:'secondQuestion'
        });

        setState((prev)=>({
            ...prev,
            messages: [...prev.messages, Greet],
        }));
      };

      const handleUserMsg = () => {
        const userMsg = createClientMessage('Got it');

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, userMsg],
        }));
      };

      const handleEnd = () => {
        const end = createChatBotMessage("Thank you",{
            widget:'timer'
        });

        setState((prev)=>({
            ...prev,
            messages: [...prev.messages, end],
        }));
      };

      const studentInfoText = (msg) => {
        const Msg = createClientMessage(msg);

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, Msg],
        }));
      };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleStart,
            handleUserMsg,
            handleGreetWithName,
            handleEnd,
            studentInfoText
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;