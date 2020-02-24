import React, { useEffect, useRef } from 'react';

import Heading from './Heading';


const ChatRoom = ({
  bot, messages, currentUser, handlePreAnswerClick, locked, setLocked,
}) => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  });

  return (
    <>
      <Heading bot={bot} />

      <div className="EoraWidget-messages" ref={container}>
        <div className="EoraWidget-messages-log">
          {messages.map((msg, indx, arr) => (
            <div key={indx}>
              <div className="EoraWidget-msg">
                <p className={`EoraWidget-msg-text ${msg.author.id === currentUser.id ? 'EoraWidget-msg-text-own' : ''}`}>{msg.text}</p>
                <p className="EoraWidget-msg-time">{msg.timestamp.toLocaleTimeString('it-IT').slice(0, 5)}</p>
              </div>
              {indx === arr.length - 1 ? (
                msg.preAnswers.length > 0 && (
                  <ul className="EoraWidget-preAnswers">
                    {msg.preAnswers.map((item, i) => <li key={i}><button type="button" onClick={handlePreAnswerClick.bind(this, item.msg)}>{item.msg}</button></li>)}
                    {msg.locked && !locked && setLocked(true)}
                  </ul>
                )
              ) : null}

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
