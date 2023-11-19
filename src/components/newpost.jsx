import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://blog-edc4e-default-rtdb.europe-west1.firebasedatabase.app/",
  apiKey: "AIzaSyDwtaEAUW63mFFJowwi8VGHVm_BhUW26c4",
  authDomain: "blog-edc4e.firebaseapp.com",
  projectId: "blog-edc4e",
  storageBucket: "blog-edc4e.appspot.com",
  messagingSenderId: "915406206864",
  appId: "1:915406206864:web:5b914ef511e614671a2515",
  measurementId: "G-HLRCHLPFK0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function NewPost() {
  return (
        <form className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-4">New Post</h1>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                    Title
                </label>
                <input
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