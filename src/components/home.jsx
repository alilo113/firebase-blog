import { Link } from 'react-router-dom';

export function Home() {

  async function fetchData(){
    try {
      const url = "https://blog-2-c7269-default-rtdb.europe-west1.firebasedatabase.app/.json";
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.posts)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(fetchData())

  return (
    <>
      <div className="text-white bg-zinc-900 flex items-center justify-between p-5">
        <h1 className="text-xl">personal blog</h1>
        <Link to={'/newpost'} className="hover:underline">
          create new post
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
          <div className="border border-solid border-black w-fit p-5 m-5">
            <img alt="Blog" className="max-w-xs" />
            <div className="flex items-center justify-between my-4">
              <h1 className="text-2xl font-bold">Blog 1</h1>
              <Link className="bg-sky-800 p-3 text-white rounded-md hover:bg-sky-500">
                LEARN MORE
              </Link>
            </div>
          </div>
      </div>
    </>
  );
}