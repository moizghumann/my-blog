import React from 'react'
import Section from './Section'

const Motto = () => {
    return (
        <Section>
            <div className='  flex flex-col justify-center items-center h-screen'>
                <div className='  bg-[#374151] flex flex-col justify-center items-center w-6/12'>
                    <div className=' bg-lime-400 rounded-lg flex flex-row justify-center items-center px-2'>
                        <h3 className=' font-medium text-lime-950'>Motto</h3>
                    </div>
                    <h1 className=' text-6xl font-semibold tracking-tight text-center'>Design experiences that people never forget</h1>
                </div>
            </div>
        </Section>
    )
}

export default Motto