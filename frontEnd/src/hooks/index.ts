import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "content": string,
    "title": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const usesBlog =({id}:{id : string})=>{
    const [loading, setloading] = useState(true);
    const [blog, setblog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setblog(response.data.blog);
            setloading(false);
        })
    }, [id])

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setloading] = useState(true);
    const [blogs, setblogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setblogs(response.data.blogPost);
            setloading(false);
        })
    }, [])

    return {
        loading,
        blogs
    }
}