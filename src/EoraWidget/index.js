import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import bot from './MockBot';

import WelcomeScreen from './components/WelcomeScreen';
import Heading from './components/Heading';
import FormInput from './components/FormInput';
import MainButton from './components/MainButton';

import './styles/eoraWidget.css';

const defaultUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe'
}

const EoraWidget = (props) => {

  const [isOpened, setIsOpened] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [locked, setLocked] = useState(false);
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  });

  const handleClick = (e) => {
    setIsOpened(!isOpened);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = new Message(currentUser, input);

    setMessages(prevState => ([
      ...prevState,
      newMessage
    ]));

    setInput('');

    // TODO if last message was mine do nothing with bot
    bot.saySomething();
  }

  const handlePreAnswerClick = (text) => {
    const newMessage = new Message(currentUser, text);

    setMessages(prevState => ([
      ...prevState,
      newMessage
    ]));

    bot.saySomething();
    setLocked(false);
  }

  if (!bot.action) {
    bot.init(setMessages);
  }

  return (
    <div className="EoraWidget" >
      <div className={`EoraWidget-container ${isOpened && "EoraWidget-container-shown"} ${messages.length && "EoraWidget-container-white"}`} >
        {!messages.length ? <WelcomeScreen bot={bot} />
          : <>
            <Heading bot={bot} />

            <div className="EoraWidget-messages" ref={container}>
              <div className="EoraWidget-messages-log">
                {messages.map((msg, indx, arr) => (
                  <div key={indx}>
                    <div className="EoraWidget-msg">
                      <p className={`EoraWidget-msg-text ${msg.author.id === currentUser.id ? 'EoraWidget-msg-text-own' : ''}`}>{msg.text}</p>
                      <p className="EoraWidget-msg-time">{msg.timestamp.toLocaleTimeString("it-IT").slice(0, 5)}</p>
                    </div>
                    {indx === arr.length - 1 ? (
                      msg.preAnswers.length > 0 && (
                        <ul className="EoraWidget-preAnswers">
                          {msg.preAnswers.map((item, indx) => <li key={indx}><button type="button" onClick={handlePreAnswerClick.bind(this, item.msg)}>{item.msg}</button></li>)}
                          {msg.locked && !locked && setLocked(true)}
                        </ul>
                      )
                    ) : null}

                  </div>
                ))
                }
              </div>
            </div>
          </>
        }

        <FormInput locked={locked} handleSubmit={handleSubmit} setInput={setInput} input={input} />
      </div>

      <MainButton isOpened={isOpened} handleClick={handleClick} />
    </div>
  );
}

export default function Render(props) {
  const container = window.document.getElementById("eoraWidget");
  return ReactDOM.createPortal(EoraWidget(props), container);
}