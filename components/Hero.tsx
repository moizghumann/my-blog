import React from 'react';
import Slider from './Slider';
import Section from './Section';
import Button from './Button';
import Link from 'next/link';

const Hero = () => {
    return (
        <Section>
            <div className=' flex flex-col justify-center items-center mb-10 mt-10 h-screen '>
                <div className='flex flex-col justify-around items-center w-[69%] flex-grow mt-auto pt-20'>
                    <h1 className='text-7xl text-center font-semibold tracking-tight text-[#CEFF1A] opacity-90'>
                        Moiz focuses on crafting meaningful experiences as an independent front-end developer
                    </h1>
                    <div className=' flex flex-row justify-between gap-4'>
                        <Link href={'/blogs'}>
                            <Button>
                                Read my Blog
                            </Button>
                        </Link>
                        <Button>
                            Poke me
                        </Button>
                    </div>
                    <Slider />
                </div>

            </div>
        </Section>

    );
};

export default Hero;
