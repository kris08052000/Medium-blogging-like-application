import { Blogcard } from "../components/Blogcard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks"
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div >
             <Appbar />
            <div className="flex justify-center">
            <div>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            </div>
            </div>
        </div>
    }

    return <div >
        <Appbar />
        <div className="flex justify-center">
            <div >
                {blogs.map(blog => <Blogcard
                    id={blog.id}
                    authorName={blog.author.name || "Anynomous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate="1st April 2024" />)}
            </div>
        </div>
    </div>

}