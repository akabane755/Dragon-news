import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='flex gap-3 flex-col mt-5'>
        <p className='text-xl text-primary font-bold'>Login With</p>
        <button className='btn btn-outline btn-info w-full'><FcGoogle />Login with Google</button>
         
            <button className='btn btn-outline btn-primary'><FaGithub/>Login with github</button>
           
        </div>
    );
};

export default SocialLogin;