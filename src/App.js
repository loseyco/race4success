import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Features from './components/Features';
import FoundingTeam from './components/FoundingTeam';
import Events from './components/Events';
import GetInvolved from './components/GetInvolved';
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
              <Mission />
              <Features />
              <FoundingTeam />
              <Events />
              <GetInvolved />
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
