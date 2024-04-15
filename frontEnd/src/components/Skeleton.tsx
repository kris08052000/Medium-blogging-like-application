export const Skeleton = () =>{
    return <div role="status" className="animate-pulse">
        <div className="p-4 border-b pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex pb-1">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="flex justify-center flex-col pl-2"><circle/></div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </div>
            </div>
            <div className="text-xl font-semibold ">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <div className="text-xs font-thin">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <div className="text-slate-500 text-sm font-thn pt-4">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
    
    
}