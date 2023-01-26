import React from 'react';

import chatIcon from '../icons/chatIcon.svg';
import closeIcon from '../icons/closeIcon.svg';


const MainButton = ({ isOpened, handleClick }) => (
  <button
    type="button"
    className={`EoraWidget-button ${isOpened && 'EoraWidget-button-tooltip-off'}`}
    onClick={handleClick}
    data-tool-tip="Contact us!"
  >
    <img src={isOpened ? closeIcon : chatIcon} alt="" />
  </button>
);

export default MainButton;
