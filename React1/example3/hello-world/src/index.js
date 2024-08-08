import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './components/HelloWorld';
import { ChampList, app } from './components/ChampList';
import Like from './components/Like';
import Counter from './components/Counter';
import RandomName from './components/RandomNameComponent';
import ParentMoney from './components/ParentMoney';
import TodoList from './components/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (
    <div className='App'>
      <TodoList/>
      {/* <Like/>
      <RandomName/>
      <Counter counterName={'Rohan'} initialValue={10}/>
      <Counter counterName={'Abhishek'} initialValue={20}/>
      <Counter counterName={'SRK'} initialValue={30}/>
      <ParentMoney money={200}/> */}
      {/* <h1>Hello World</h1> */}
      {/* <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/> */}
      {/* <ul>
        <li>Prabir</li>
        <li>Souvik</li>
        <li>Abhishek</li>
        <li>Ashutosh</li>
      </ul> */}
      {/* <ChampList/>
      <ChampList/>
      <ChampList/>
      <App/> */}
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
