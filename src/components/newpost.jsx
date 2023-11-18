import { useState, useContext,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import React, { createContext } from 'react';

export const PostContext = createContext();

export function NewPost() {
    const [posts, setPosts] = useState([]); // Renamed `post` to `posts` for clarity
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    function handleSumt(e) {
        e.preventDefault();
        const newPost = {
            title: title,
            image: image,
            content: content
        };
        setPosts(prevPosts => [...prevPosts, newPost]);
        // Clear form fields after submission
        setTitle("");
        setImage("");
        setContent("");
    }

    useEffect(() => {
        console.log(posts);
    }, [posts]); // Will log whenever `posts` changes

    return (
      <PostContext.Provider value={{posts, handleSumt}}>
      <form className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md" onSubmit={handleSumt}>
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
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
            Image
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            id="image"
            type="file"
            name="image"
            className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
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
      </PostContext.Provider>
    );
  }  