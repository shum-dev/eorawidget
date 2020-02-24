import React from 'react';
import ReactDOM from 'react-dom';

import EoraWidget from './EoraWidget';

export default function Render() {
  const container = window.document.getElementById('eoraWidget');
  return ReactDOM.createPortal(<EoraWidget />, container);
}
