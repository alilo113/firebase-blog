import { useContext } from 'react';
import { PostContext } from './newpost';
import img from '../components/pexels-rodrigo-santos-3888151.jpg';
import { Link } from 'react-router-dom';

export function Home() {
  const { posts = [] } = useContext(PostContext); // Provide a default value if 'posts' are undefined

  return (
    <>
      <div className="text-white bg-zinc-900 flex items-center justify-between p-5">
        <h1 className="text-xl">personal blog</h1>
        <Link to={'/newpost'} className="hover:underline">
          create new post
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {posts.map((singlePost, index) => (
          <div className="border border-solid border-black w-fit p-5 m-5" key={index}>
            <img src={singlePost.image || img} alt="Blog" className="max-w-xs" />
            <div className="flex items-center justify-between my-4">
              <h1 className="text-2xl font-bold">{singlePost.title}</h1>
              <Link className="bg-sky-800 p-3 text-white rounded-md hover:bg-sky-500">
                LEARN MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}