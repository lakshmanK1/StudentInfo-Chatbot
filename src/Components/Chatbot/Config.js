import { createChatBotMessage } from 'react-chatbot-kit';
import GotItBtn from './Widgets/GotItBtn/GotItBtn';
import { NameInput, AgeInput} from './Widgets/InputDetails/InputDetails';
import Timer from './Widgets/Timer/Timer';
import BotAvatar from './BotAvatar/BotAvatar';

const config = {
  lang: "no",
  botName: "ChatBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [createChatBotMessage('Hello, Welcome to student info system!',{
    widget:'gotItButton'
  })],
  customComponents:{botAvatar : (props)=><BotAvatar {...props}/>},
  widgets: [
    {
        widgetName:'gotItButton',
        widgetFunc: (props)=><GotItBtn {...props}/>
    },
    {
        widgetName:'firstQuestion',
        widgetFunc: (props)=><NameInput {...props}/>,
    },
    {
      widgetName:'secondQuestion',
      widgetFunc:(props)=><AgeInput {...props}/>
    },
    {
      widgetName:'timer',
      widgetFunc:(props)=><Timer {...props}/>
    }

  ]
};

export default config;