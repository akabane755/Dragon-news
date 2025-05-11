import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='my-5'>
            <p className='text-primary font-semibold text-xl'>Find Us On</p>
            <div>
            <div class="join join-vertical w-full mt-4">
  <button class="btn join-item bg-white w-full "><FaFacebook />Facebook</button>
  <button class="btn join-item bg-white w-full "><FaTwitter />Twitter</button> 
  <button class="btn join-item bg-white w-full "><FaInstagram />Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;