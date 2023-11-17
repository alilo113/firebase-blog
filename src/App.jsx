import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Newpost } from './components/newpost';
import { Home } from './components/home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/newpost" element={<Newpost />} />
    </Routes>
  );
}

export default App;
