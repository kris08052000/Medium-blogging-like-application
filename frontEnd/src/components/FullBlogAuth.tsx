import { Blog } from "../hooks";
import { Appbar } from "./Appbar"
import { Avatar } from "./Blogcard";




export const FullBlogAuth = ({ blog }: { blog: Blog }) => {
    return <div >
        <Appbar />
        <div className="flex justify-center pt-10">
            <div className="grid grid-cols-12 px-10 w-full pt-200  max-w-screen-xl ">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-600 pt-2">Posted on 2nd Dec 2023</div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 pl-8">
                    <div className="font-medium text-slate-600 pb-2">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                        <Avatar size={"big"} name={blog.author.name || "A"}/>
                        </div>
                        <div>
                            <div className="font-bold text-2xl">{blog.author.name || "Anonymous"}</div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase of the author to catch the user's attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}