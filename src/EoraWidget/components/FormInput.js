import React from 'react';
import sendMsgIcon from '../icons/sendMsgIcon.svg';

const FormInput = ({ locked, handleSubmit, setInput, input }) => {
  return (
    <form className={`EoraWidget-input ${locked ? 'EoraWidget-input-hidden' : ''}`} onSubmit={handleSubmit}>
      <input
        placeholder="Напишите нам"
        onChange={({ target }) => setInput(target.value)}
        value={input}
      />
      <button type="submit" disabled={!input}>
        <img src={sendMsgIcon} alt="" />
      </button>
    </form>
  );
}

export default FormInput;