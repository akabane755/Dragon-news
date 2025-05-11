import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData, useParams } from 'react-router';

import Header from './Header';
import RightAside from './RightAside';
import { IoArrowBack } from 'react-icons/io5';

const NewsDet = () => {
    const data=useLoaderData();
    
    const {id}=useParams();
    
    const [ne,setNe]=useState({})
    useEffect(()=>{
        const news=data.filter(da=>da.id==id);
        setNe(news[0])
        
    },[id,data])
//console.log(ne)
    return (
        <div className='w-11/12 mx-auto'>
       <Header></Header>
       <main className=' grid grid-cols-12 gap-5'>
       <section className='col-span-9'>
           <p className='font-semibold text-primary text-xl'>Dragon News</p>
           <div className="card bg-base-100  shadow-sm my-15 p-15">
  <figure>
    <img className='object-cover w-full'
      src={ne.image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{ne.title}</h2>
    <p>{ne.details}</p>
    <div className="card-actions justify-start">
      <Link to='/'
       className="btn btn-secondary"><IoArrowBack size={24} />All news in this category</Link>
    </div>
  </div>
</div>
           </section>
           <aside className='col-span-3'>
           <RightAside></RightAside>
           </aside>
           </main>
        </div>
    );
};

export default NewsDet;