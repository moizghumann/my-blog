import React from 'react'
import BlogCard from './BlogCard'

const BlogsSection = () => {
    return (
        <div className='  w-full m-0 p-0'>
            <div className=' grid grid-cols-4 gap-8 mt-44 xl:grid-cols-4 xm:grid-cols-4 xt:grid-cols-3 xs:grid-cols-1    '>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogsSection