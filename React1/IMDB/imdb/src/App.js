import logo from './logo.svg';
import './App.css';
import LifeCycleExample from './components/LifecycleExample';
import { useState } from 'react';

function App() {
  const [isLifeCycleVisible, setLifeCycleVisibility] = useState(true);
  return (
    <div className="App">
      { isLifeCycleVisible ? <LifeCycleExample/> : null }
      <input type='checkbox' checked={isLifeCycleVisible} onChange={() => setLifeCycleVisibility(!isLifeCycleVisible)}/> Set Visibility
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
