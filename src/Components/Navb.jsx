import React, { use, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userpic from "../assets/user.png"
import { AuthContext } from '../Firebase/AuthProvider';
const Navb = () => {
    const {user,handleSignout}=use(AuthContext);
    const handleLogout=()=>{
        handleSignout()
    }
    return (
        <div className='flex w-11/12 mx-auto items-center justify-between '>
        <div>{user&&<p>{user.email}</p>}</div>
            <div className=' flex gap-3 text-accent' >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-4'>
                <img src={userpic}></img>
                {user?<button className='btn btn-primary px-10' onClick={()=>handleLogout()}>Logout</button>:<NavLink to='/auth/login'> <button className='btn btn-primary px-10'>Login</button></NavLink>   }
            
            </div>
        </div>
    );
};

export default Navb;