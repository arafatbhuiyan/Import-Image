import React from 'react';
import Hero from '../assets/Img/Hero.png'

const About = () => {
    return (
        <div className=''>
            <div className='flex relative mb-9'>
             <img className='' src={Hero} alt="" />
                <h1 className='flex absolute justify-center text-white text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'> About Page</h1>            
            </div>
        </div>
    );
};

export default About;