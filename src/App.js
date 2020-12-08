import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import Credits from './components/Credits';


function App() {
  return (
   <BrowserRouter>
    <div className="app">
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
      <Credits />
    </div>
   </BrowserRouter>
   
  );
}

export default App;
