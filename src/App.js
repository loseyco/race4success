import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <CTA />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
