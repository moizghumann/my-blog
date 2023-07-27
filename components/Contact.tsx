import React from 'react'
import Section from './Section'

const Contact = () => {
    return (
        <Section>
            <div className='  flex flex-col justify-center items-center'>
                <div className=' p-2 px-4 pb-4  border-2  border-[#E6E1C5] rounded-2xl mx-4 mt-10 mb-6 w-fit'>
                    <h1 className='text-[#CEFF1A] text-8xl font-medium tracking-tight text-center'>
                        moizghuman@gmail.com
                    </h1>
                </div>
                <div className=' left-1 relative h-16 w-64 border-4 border-pink-950 bg-pink-700 rounded-xl flex flex-row justify-center items-center font-medium text-xl'>
                    <p>get in touch with me</p>
                    <div className=' block absolute h-8 w-8 border-4 border-pink-950 bg-pink-700 rounded-tl-lg rotate-45 top-[-19px] left-40 border-r-0 border-b-0'></div>
                </div>
            </div>
        </Section>
    )
}

export default Contact