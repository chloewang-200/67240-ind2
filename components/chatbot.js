// import {DeepChat as DeepChatCore} from 'deep-chat'; <- type
import { DeepChat } from 'deep-chat-react';
import './style.css';

export const App = () => {
  const initialMessages = [
    { role: 'user', text: 'Hey, how are you today?' },
    { role: 'ai', text: 'I am doing very well!' },
  ];
  // demo/style/textInput are examples of passing an object directly into a property
  // initialMessages is an example of passing a state object into a property
  console.log("hi")
  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        initialMessages={initialMessages}
      />
    </div>
  );
};
