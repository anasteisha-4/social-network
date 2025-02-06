import './index.css';
import state from './redux/state';
import { render } from './render';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  addPost,
  sendMessage,
  subscribe,
  updateNewMessageText,
  updateNewPostText
} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
};

render(state);
subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
