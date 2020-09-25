import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Views/Home';
import {Router} from '@reach/router';
import Create from './Views/Create';
import Axios from 'axios';


function App() {

  return (
    <div className="App">
      <Router>
        <Home path="/"/>
      </Router>
      
    </div>
  );
}

export default App;
