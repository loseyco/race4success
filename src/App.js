import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SimpleLanding from './components/SimpleLanding';
import DevPage from './components/DevPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<SimpleLanding />} />
          <Route path="/dev" element={<DevPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
