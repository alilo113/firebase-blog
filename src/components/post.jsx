import { Link } from 'react-router-dom';

export function Post({ post }) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md my-4">
      <img src={post.imageUrl} alt={post.title} className="w-full rounded-md mb-4" />
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Go to home page
      </Link>
    </div>
  );
}