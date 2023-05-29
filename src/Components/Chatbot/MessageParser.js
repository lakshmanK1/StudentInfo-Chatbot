import React from 'react';

const MessageParser = ({ children, actions }) => {

   const parse = (message) => {
    if(message.toLowerCase().includes('hello')){
        actions.handleHello();
    }

    if(message.toLowerCase().includes('got it')){
        actions.handleStart();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;