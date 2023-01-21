import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shuffler from './pages/Shuffler';

import './css/styles.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shuffler' element={<Shuffler />} />
      </Routes>
    </Router>
  )
}

export default App;
