import Image from 'next/image'
import React from 'react'
import lofi from '../public/blogImages/Lofi Apartments.jpeg'
import Badge from './Badge'

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

            <div className="pt-5">
                <h6 className=' text-sm font-medium uppercase'>Tech</h6>
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                    Noteworthy technology acquisitions 2021
                </h5>

            </div>
        </div>
    )
}

export default BlogCard