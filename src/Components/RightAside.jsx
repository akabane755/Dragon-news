import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import bgimg from '../assets/bg.png'
const RightAside = () => {
    return (
        <div>
         <SocialLogin></SocialLogin>
         <FindUs></FindUs>
         <Qzone></Qzone>
        <div >
            <img src={bgimg} className='w-full'></img>
        </div>
        </div>
    );
};

export default RightAside;