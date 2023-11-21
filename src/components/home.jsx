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
const db = getDatabase(app)
const reference = ref(db, "posts/" + "blog");  

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
      {/* Your existing UI */}
      <div className="text-white bg-zinc-900 flex items-center justify-between p-5">
        <h1 className="text-xl">personal blog</h1>
        <Link to={'/newpost'} className="hover:underline">
          create new post
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {posts.map((post) => (
          <div key={post.id} className="border border-solid border-black w-fit p-5 m-5">
            <img src={post.imageUrl} alt="Blog" className="max-w-xs" />
            <div className="flex items-center justify-between my-4">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <Link to={`/post/${post.id}`} className="bg-sky-800 p-3 text-white rounded-md hover:bg-sky-500">
                LEARN MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
