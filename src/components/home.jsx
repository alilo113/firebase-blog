import {Link} from "react-router-dom"
import img from "../components/pexels-rodrigo-santos-3888151.jpg"

export function Home(){
    return(
    <>
    <div className="text-white bg-zinc-900 flex items-center justify-between p-5">
        <h1 className="text-xl">personal blog</h1>
        <Link to={"/newpost"} className="hover:underline">
            create new post
        </Link>
    </div>
    <div className="flex flex-wrap justify-center">
        <div className="border border-solid border-black w-fit p-5 m-5">
            <img src={img} alt="Blog" className="max-w-xs" /> {/* Adjust width and height classes as needed */}
        <div className="flex items-center justify-between my-4">
            <h1 className="text-2xl font-bold">First blog</h1>
            <Link className="bg-sky-800 p-3 text-white rounded-md hover:bg-sky-500">
              LEARN MORE
            </Link>
        </div>
        </div>
    </div>
        </>
    )
}