import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Cover from './components/Cover';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Cover />
        <NavBar />
        <Home />
      </header>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
