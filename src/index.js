import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const posts = [
  {
    id: 1,
    text: 'Звук клавиш печатной машинки определил дальнейшее развитие',
    likesCount: 0
  },
  {
    id: 2,
    text: 'Постоянный количественный рост не стал ограничивающим фактором',
    likesCount: 5
  },
  {
    id: 3,
    text: 'Но семантический разбор внешних противодействий не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.',
    likesCount: 10
  }
];

const users = [
  { id: 1, name: 'Anastasia' },
  { id: 2, name: 'Bogdan' },
  { id: 3, name: 'Polly' }
];

const messages = [
  { id: 1, text: 'Привет! Как дела?', from: 'user' },
  { id: 2, text: 'Здравствуй! Я учу React, уже на 21 уроке', from: 'me' },
  { id: 3, text: 'Ничего себе! Молодец)', from: 'user' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} users={users} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
