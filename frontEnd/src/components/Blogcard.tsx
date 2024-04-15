import { Link } from "react-router-dom"

interface Blogcardprops {
    id:string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const Blogcard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: Blogcardprops) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex pb-1">
                <div className="flex"> <Avatar size={"small"} name={authorName} /></div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col" >{authorName}</div>
                <div className="flex justify-center flex-col pl-2"><Cirlce /></div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold ">
                {title}
            </div>
            <div className="text-xs font-thin">
                {content.slice(0, 100) + "...."}
            </div>
            <div className="text-slate-500 text-sm font-thn pt-4">
                {`${Math.ceil(content.length / 100)} minutes(s) read`}
            </div>
        </div>
    </Link>
}

export function Cirlce() {
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}

export function Avatar({ name , size = "small" }: { name: string , size : "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-8 h-8"}`}>
        <span className="text-xs text-gray-300">{name[0]}</span>
    </div>

}