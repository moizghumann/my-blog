import React from 'react'
import lofi from '../public/blogImages/Lofi Apartments.jpeg'
import Image from 'next/image'

const BlogCard = () => {
    return (
        <div className="max-w-sm rounded-lg shadow">

            <div className='relative h-56'>
                <Image src={lofi}
                    alt='lofi'
                    fill={true}
                    style={{ objectFit: "cover" }}
                    quality={100}
                    priority
                    className=' rounded-xl overflow-hidden'
                />
            </div>

            <div className="pt-5 pr-2">
                <h6 className=' text-sm font-medium uppercase'>Tech</h6>
                <h5 className="mb-2 text-2xl font-medium tracking-tight ">
                    Noteworthy technology acquisitions 2021
                </h5>

            </div>
        </div>
    )
}

export default BlogCard