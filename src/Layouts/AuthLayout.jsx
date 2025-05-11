import React, { use } from 'react';
import Navb from '../Components/Navb';
import { Outlet } from 'react-router';
import { AuthContext } from '../Firebase/AuthProvider';

const AuthLayout = () => {
    const {user}=use(AuthContext)
    console.log(user)
    return (
        <div className='my-5 w-11/12 mx-auto'>
        
            <Navb></Navb>
            <main className='w-11/12 mx-auto my-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;