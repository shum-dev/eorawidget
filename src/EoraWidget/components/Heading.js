import React from 'react';

const Heading = ({ bot }) => (
  <div className="EoraWidget-heading">
    <img src={bot.icon} alt="" />
    <div className="EoraWidget-status">
      <h4>{bot.name}</h4>
      <p>
        <span> </span>
        Online
      </p>
    </div>
  </div>
);

export default Heading;
