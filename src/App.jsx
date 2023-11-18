import React from 'react';
import { PostContext } from './components/newpost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewPost } from './components/newpost';
import { Home } from './components/home';

function App() {
  // Assuming you're using useContext to consume the PostContext
  const { posts } = React.useContext(PostContext);

  return (
    <Router>
      <PostContext.Provider value={posts}>
        <div>
          {/* Other components or layout */}
          <Routes>
            {/* Pass 'posts' to components that need it */}
            <Route path="/newpost" element={<NewPost posts={posts} />} />
            <Route path="/" element={<Home posts={posts} />} />
          </Routes>
        </div>
      </PostContext.Provider>
    </Router>
  );
}

export default App;
