import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import WebFont from 'webfontloader'
import { AdDesign } from './components/AdDesign';

function App() {
  return (
    <>
  <Header />
  <div className="main">
  <AdDesign />
  </div>
  </>
  );
}

export default App;
