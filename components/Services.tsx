import React from 'react'
import Section from './Section'

const Services = () => {
    return (
        <Section>
            <div className=' flex flex-col justify-between items-start gap-4'>
                <h1 className=' text-3xl font-semibold tracking-tight text-[#CEFF1A] opacity-75'>What I do</h1>
                <div className=' text-6xl w-full'>
                    <div className=' py-4 border-t-2  border-[#e6e1c561]'>Design user interfaces</div>
                    <div className=' py-4 border-t-2 border-[#e6e1c561]'>Craft engaging user experiences</div>
                    <div className=' py-4 border-t-2 border-[#e6e1c561]'>Develop design into websites</div>
                    <div className=' py-4 border-t-2 border-[#e6e1c561]'>Connect your frontend to backend</div>
                    <div className=' py-4 border-t-2 border-[#e6e1c561]'>Manage the product</div>
                    <div className='border-t-2 border-[#e6e1c561]'></div>
                </div>
            </div>

        </Section >
    )
}

export default Services