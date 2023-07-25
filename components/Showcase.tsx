import Image from 'next/image'
import React from 'react'
import game from '../public/gameLogos/console-svgrepo-com.svg'
import Button from './Button'
import Section from './Section'

const Showcase = () => {
    return (
        <>
            <Section>
                <h2 className='text-6xl text-center font-semibold tracking-tight text-[#CEFF1A] flex-shrink-0 opacity-90 py-[3rem]'>
                    Some of my projects
                </h2>
                <div className='grid gap-3 grid-cols-9'>
                    <div className='col-span-4 bg-slate-100 rounded-xl'>
                        <div className='m-1 p-8 flex flex-col justify-around items-start'>
                            <div className='flex flex-col justify-center items-start mb-32'>
                                <Image src={game} alt='game-logo' height={70} width={70} />
                                <h3 className='text-start font-semibold text-4xl text-[#0A0F19] py-4'>
                                    GameVerse
                                </h3>
                                <p className='text-[#0a0f19b0] w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia eos voluptas in? Voluptate exercitationem odit vero dolorem, suscipit ab facere maiores, est voluptas, incidunt sequi! Numquam culpa molestias nihil.</p>
                            </div>
                            <Button>deets</Button>
                        </div>
                    </div>
                    <div className='col-span-3 bg-amber-300 rounded-xl'>
                        <div className='m-1 p-8 flex flex-col justify-around items-start'>
                            <div className='flex flex-col justify-center items-start mb-32'>
                                <Image src={game} alt='game-logo' height={50} width={50} />
                                <h3 className='text-start font-semibold text-3xl text-[#0A0F19] py-4'>
                                    GameVerse
                                </h3>
                                <p className='text-[#0a0f19b0] w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia eos voluptas in? Voluptate exercitationem odit vero dolorem, suscipit ab facere maiores, est voluptas, incidunt sequi! Numquam culpa molestias nihil.</p>
                            </div>
                            <Button>info</Button>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-3 col-span-2'>
                        <div className='bg-[#db2777] rounded-xl'>
                            <div className=' p-6 flex flex-col justify-around items-start '>
                                <div className='flex flex-col justify-center items-start mb-5'>
                                    <Image src={game} alt='game-logo' height={30} width={30} />
                                    <h3 className='text-start font-semibold text-2xl text-[#0A0F19] py-1'>
                                        GameVerse
                                    </h3>
                                    <p className='text-[#0a0f19b0] w-[95%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <Button>info</Button>
                            </div>
                        </div>
                        <div className='bg-[#fb7185] rounded-xl'>
                            <div className=' p-6 flex flex-col justify-around items-start '>
                                <div className='flex flex-col justify-center items-start mb-5'>
                                    <Image src={game} alt='game-logo' height={30} width={30} />
                                    <h3 className='text-start font-semibold text-2xl text-[#0A0F19] py-1'>
                                        GameVerse
                                    </h3>
                                    <p className='text-[#0a0f19b0] w-[95%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <Button>info</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Showcase