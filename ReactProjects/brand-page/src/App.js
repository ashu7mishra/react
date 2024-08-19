import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/Hero';

function App() {
  return (
    <div className="App container">
      <Navigation />
      <HeroSection />
    </div>
  );
}

export default App;
