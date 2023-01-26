import React from 'react';
import sendMsgIcon from '../icons/sendMsgIcon.svg';

const FormInput = ({
  locked, handleSubmit, setInput, input,
}) => (
    <form className={`EoraWidget-input ${locked ? 'EoraWidget-input-hidden' : ''}`} onSubmit={handleSubmit}>
      <input
        placeholder="Your message"
        onChange={({ target }) => setInput(target.value)}
        value={input}
      />
      <button type="submit" disabled={!input}>
        <img src={sendMsgIcon} alt="" />
      </button>
    </form>
  );

export default FormInput;
