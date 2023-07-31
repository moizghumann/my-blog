import React from 'react'
import BlogCard from './BlogCard'

const BlogsGrid = () => {
    return (
        <div className=' grid grid-cols-4 gap-8 xl:grid-cols-4 xm:grid-cols-4 xt:grid-cols-3 xs:grid-cols-1    '>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}

export default BlogsGrid