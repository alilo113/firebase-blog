import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";

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
  const storage = getStorage(app);
  const db = getDatabase(app)
  const reference = ref(db, "posts/" + crypto.randomUUID());  
  
  export function NewPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const nav = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title && content) {
        const postsRef = ref(db, "posts");
        const newPostRef = push(postsRef);
    
        if (newPostRef) {
          await set(newPostRef, {
            title: title,
            content: content,
            // Add other post properties like image URL if needed
          });
          
          setTitle("");
          setContent("");
          nav("/");
        } else {
          console.log("Failed to create a new post reference.");
        }
      } else {
        console.log("Please provide a title and content for the post.");
      }
    };    

    return (
      <form
        className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold mb-4">New Post</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            type="text"
            name="title"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter the title..."
          />
        </div>
        <div className="mb-4">
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="content"
            name="content"
            className="w-full border rounded-md py-2 px-3 text-gray-700 h-32 resize-none focus:outline-none focus:border-blue-500"
            placeholder="Write your content here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Publish
        </button>
      </form>
    );
  }  