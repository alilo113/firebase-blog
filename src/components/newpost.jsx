import { initializeApp } from "firebase/app";
import { getDatabase, set , ref } from "firebase/database";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  databaseURL: "https://personal-blog-c9424-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyB2yyhncj3t7lUVN0Js_c8IzXkIPebzS78",
  authDomain: "personal-blog-c9424.firebaseapp.com",
  projectId: "personal-blog-c9424",
  storageBucket: "personal-blog-c9424.appspot.com",
  messagingSenderId: "48943337688",
  appId: "1:48943337688:web:26a1ea2e370b1c6f0207ad",
  measurementId: "G-MP9XZJN697"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app)

// ... (Previous code remains the same)

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      // User signed in with Google successfully
      const user = userCredential.user;
      console.log("User signed in with Google:", user.uid);
      
      // Write user data to the database
      writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    })
    .catch((error) => {
      // Handle errors during sign-in
      console.error("Sign-in error:", error.message);
    });
}

function writeUserData(userId, name, email, imageUrl) {
  try {
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
    })
    .then(() => {
      console.log("Data written successfully!");
    })
    .catch((error) => {
      console.error("Error writing data: ", error);
    });
  } catch (error) {
    console.error("Error writing data: ", error);
  }
}

// Call the function to sign in with Google
signInWithGoogle();

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