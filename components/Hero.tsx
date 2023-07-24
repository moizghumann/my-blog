import React from 'react';
import Slider from './Slider';

const Hero = () => {
    return (
        <section className='h-screen px-[0.5rem] flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-[63%] flex-grow mt-auto'>
                <h1 className='text-7xl text-center font-semibold tracking-tight text-[#CEFF1A] flex-shrink-0 opacity-90 mt-10'>
                    Moiz focuses on crafting meaningful experiences as an independent front-end developer
                </h1>
                <p className='px-20 text-center pt-7 text-lg opacity-80'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor, aliquid deleniti dolorem consequuntur architecto cum facere iure suscipit nobis eaque, dolorum neque ea vero rem! Aut omnis temporibus eum!
                </p>
            </div>
            <Slider />
        </section>
    );
};

export default Hero;
