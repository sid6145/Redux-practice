import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store'
import App from './App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)