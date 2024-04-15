import {Avatar} from "../components/Blogcard"
import {Link} from "react-router-dom"

export const Appbar =()=>{
    return <div className="border-b flex justify-between px-6 py-4">
        <Link to={"/blogs"} className="text-3xl font-normal cursor-pointer ">
            Medium
        </Link>
        <div>
        <Link to={"/publish"}>
        <button type="button" className=" mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center me-4">New</button>
        </Link>
            <Avatar size={"big"} name="A"/>
        </div>
    </div>
}