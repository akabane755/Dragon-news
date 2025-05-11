import React from 'react';
import play from '../assets/playground.png';
import swim from '../assets/swimming.png'
import clas from '../assets/class.png'
const Qzone = () => {
    return (
        <div className='bg-base-300   p-4 rounded-2xl my-5'>
           <p className='text-primary font-bold'>Q-Zone</p> 
           <div className='flex flex-col items-center gap-4 justify-center mt-4'>
           <img src={swim}></img>
           <img src={clas}></img>
           <img src={play}></img>
           </div>
        </div>
    );
};

export default Qzone;