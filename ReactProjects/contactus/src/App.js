import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Navigation/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  );
}

export default App;
