import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewPost } from './components/newpost';
import { Home } from './components/home';

function App() {
  return (
          <Routes>
            {/* Pass 'posts' to components that need it */}
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/" element={<Home />} />
          </Routes>
  );
}

export default App;
