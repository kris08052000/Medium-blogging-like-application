import { useParams } from "react-router-dom";
import { FullBlogAuth } from "../components/FullBlogAuth";
import { usesBlog } from "../hooks"
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";


export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = usesBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
             <Appbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }

    return <div>
        <FullBlogAuth blog={blog} />
    </div>

}
