import React from 'react'
import Image from 'next/image'
import next from '/public/logos/nextjs-logotype-dark-background.svg'
import styles from './styles/slider.module.css'
const Slider = () => {
    return (
        <div className='h-20 mx-[-10] flex flex-row h-22 w-full bg-hsl(204, 5%, 9%) overflow-hidden whitespace-nowrap relative before:absolute before:top-0 before:w-[250px] before:h-[100%] before:content-[""] before:z-10 
            after:absolute after:top-0 after:w-[250px] after:h-[100%] after:content-[""] after:z-10 
            before:bg-gradient-to-l from-transparent to-hsl(0, 0%, 100%) before:left-0
            after:bg-gradient-to-r from-transparent to-hsl(0, 0%, 100%) after:right-0'>
            <div className={`flex ${styles.content} mr-20`}>
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
            </div>
            <div className={`flex ${styles.content}`}>
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
                <Image src={next} alt='next js' height={100} width={100} className='mx-20' />
            </div>
        </div>
    )
}

export default Slider