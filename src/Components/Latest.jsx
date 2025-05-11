import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex justify-center items-center gap-2 bg-base-200 w-11/12 mx-auto p-3 my-8'>
            <button className='btn btn-secondary'>Latest</button>
            <Marquee speed={140} pauseOnHover={true}>
            <p className='text-xl font-semibold text-primary'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p> 
            </Marquee>
           
        </div>
    );
};

export default Latest;