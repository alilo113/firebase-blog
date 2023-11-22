import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";

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

export function Home() {
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
    <>
      <div className="text-white bg-zinc-900 flex items-center justify-between p-5">
        <h1 className="text-xl">Personal Blog</h1>
        <Link to={'/newpost'} className="hover:underline">
          Create New Post
        </Link>
      </div>
      <div className="flex flex-col justify-between">
        {posts.map((post) => (
          <div key={post.id} className="border border-solid border-black p-5 m-5 flex">
            {post.imageUrl && (
              <div>
                <img src={post.imageUrl} alt={post.title} className="max-w-xs mb-4" />
              </div>
            )}
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <div>
                <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                <p className="text-gray-600 mb-4">{post.summary}</p>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  to={`/post/${post.id}`}
                  className="bg-sky-800 p-3 text-white rounded-md hover:bg-sky-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );  
}