import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' },
];

let messageData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'AndrHow is your it-Reactey' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yes' },
]

let postData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: 'It, my first post?', likesCount: 50 },

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App props={dialogsData} message={messageData} post={postData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
