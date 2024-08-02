import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './components/HelloWorld';
import { ChampList, app } from './components/ChampList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (
    <div>
      {/* <h1>Hello World</h1> */}
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      {/* <ul>
        <li>Prabir</li>
        <li>Souvik</li>
        <li>Abhishek</li>
        <li>Ashutosh</li>
      </ul> */}
      <ChampList/>
      <ChampList/>
      <ChampList/>
      <App/>
    </div>
    
  )
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
