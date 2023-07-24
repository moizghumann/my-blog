import React from 'react'
import styles from './styles/NavBar.module.css'
import Image from 'next/image'
import logo from '../public/images/moiz.jpg'

const NavBar = () => {
    return (
        <nav className='fixed w-full h-20 px-[6rem]'>
            <div className='flex flex-row justify-between items-center h-20 w-full px-6 ring-2 ring-[#E6E1C5] rounded-3xl mt-7 overflow-x-hidden'>
                <div>
                    <Image
                        src={logo}
                        alt='logo'
                        height={50}
                        width={50}
                        className='cursor-pointer rounded-full'
                        priority
                    />
                </div>
                <div>right</div>
            </div>
        </nav>
    )
}

export default NavBar