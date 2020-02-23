import React from 'react';

const WelcomeScreen = ({ bot }) => {
  return (
    <div className="EoraWidget-welcome-screen">
      <h4>{bot.name}</h4>
      <div>
        <img src={bot.icon} alt="" />
        <h6>{bot.welcome.title}</h6>
        <p>{bot.welcome.message}</p>
      </div>
    </div>
  )
}

export default WelcomeScreen;