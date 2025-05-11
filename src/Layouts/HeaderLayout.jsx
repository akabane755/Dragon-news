import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navb from '../Components/Navb';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';

const HeaderLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Latest></Latest>
                <Navb></Navb>
            </header>
            
            <main className='w-11/12 grid mx-auto text-xl text-primary grid-cols-12 '>
            <aside className='col-span-3 top-0 sticky h-fit' ><LeftAside ></LeftAside></aside>
            <div className='col-span-6'>
            <Outlet ></Outlet>
            </div>
                <aside className='col-span-3 top-0 sticky h-fit'>
                <RightAside ></RightAside>
                </aside>
               
            </main>
         
        </div>
    );
};

export default HeaderLayout;