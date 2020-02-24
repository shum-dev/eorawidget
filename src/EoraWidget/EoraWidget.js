import React, { useState } from 'react';
import Message from './Message';
import bot from './MockBot';

import WelcomeScreen from './components/WelcomeScreen';
import FormInput from './components/FormInput';
import MainButton from './components/MainButton';
import ChatRoom from './components/ChatRoom';

import './styles/eoraWidget.css';

const defaultUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
};

const EoraWidget = () => {
  const [currentUser, setCurrentUser] = useState(defaultUser);

  const [isOpened, setIsOpened] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [locked, setLocked] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = new Message(currentUser, input);

    setMessages((prevState) => ([
      ...prevState,
      newMessage,
    ]));

    setInput('');

    // TODO if last message was mine do nothing with bot
    bot.saySomething();
  };

  const handlePreAnswerClick = (text) => {
    const newMessage = new Message(currentUser, text);

    setMessages((prevState) => ([
      ...prevState,
      newMessage,
    ]));

    bot.saySomething();
    setLocked(false);
  };

  if (!bot.action) {
    bot.init(setMessages);
  }

  return (
    <div className="EoraWidget">
      <div className={`EoraWidget-container ${isOpened && 'EoraWidget-container-shown'} ${messages.length && 'EoraWidget-container-white'}`}>
        {
          !messages.length
            ? <WelcomeScreen bot={bot} />
            : (
              <ChatRoom
                bot={bot}
                messages={messages}
                currentUser={currentUser}
                handlePreAnswerClick={handlePreAnswerClick}
                locked={locked}
                setLocked={setLocked}
              />
            )
        }
        <FormInput locked={locked} handleSubmit={handleSubmit} setInput={setInput} input={input} />
      </div>

      <MainButton isOpened={isOpened} handleClick={handleClick} />
    </div>
  );
};

export default EoraWidget;
