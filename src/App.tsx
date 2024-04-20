import React from 'react';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cover from './components/Cover';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cover />
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
