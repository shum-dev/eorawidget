import React from 'react';

import chatIcon from '../icons/chatIcon.svg';
import closeIcon from '../icons/closeIcon.svg';


const MainButton = ({ isOpened, handleClick }) => {
  return (
    <button className={`EoraWidget-button ${isOpened && "EoraWidget-button-tooltip-off"}`}
      onClick={handleClick}
      data-tool-tip="Связяться с нами!"
    >
      <img src={isOpened ? closeIcon : chatIcon} alt="" />
    </button>
  );
}

export default MainButton;