import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <img src={logo}></img>
            <p className='text-xl text-accent'>Journalism Without Fear or Favour</p>
           <p className='text-primary text-xl font-medium'>{format(new Date(),"EEEE,")}<span className='text-accent'>{format(new Date(),"PP")}</span></p>
           
        </div>
    );
};

export default Header;