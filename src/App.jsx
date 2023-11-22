import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewPost } from './components/newpost';
import { Home } from './components/home';
import { Post } from './components/post';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react';


const firebaseConfig = {
  databaseURL: "https://blog-2-c7269-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyAzrno79zHWlmX5dQ71Fs24ai8jVw88EEU",
  authDomain: "blog-2-c7269.firebaseapp.com",
  projectId: "blog-2-c7269",
  storageBucket: "blog-2-c7269.appspot.com",
  messagingSenderId: "515644145492",
  appId: "1:515644145492:web:f7420331365b3030dcd2c1",
  measurementId: "G-TX12R6EJ3K"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = ref(db, "posts");
    onValue(postsRef, (snapshot) => {
      const postsData = snapshot.val();
      if (postsData) {
        const postsArray = Object.keys(postsData).map((key) => ({
          id: key,
          ...postsData[key],
        }));
        setPosts(postsArray);
      }
    });
  }, []);

  return (
          <Routes>
            {posts.map(post => (
            <Route
            key={post.id}
            path={`/post/${post.id}`}
            element={<Post post={post} />} // Pass the 'post' data as prop to the Post component
            />
            ))}
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/" element={<Home />} />
          </Routes>
  );
}

export default App;
