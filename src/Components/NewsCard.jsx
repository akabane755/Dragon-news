import React, { useState } from 'react';
import { CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoBookmarkOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const NewsCard = ({ne}) => {
    const [show,setShow]=useState(false)
   
   
      
 
    
    return (
        <div className='bg-white border border-gray-200 border-shawdow-sm m-5 rounded-2xl p-4 shadow-sm'>
            <div className='flex justify-between items-center bg-base-200 p-3 rounded-2xl gap-3'>
                <div className='flex mr-4'>
                <div className="avatar">
            <div className="w-10 rounded-full">
                <img src={ne.author.img} />
         </div>
         </div>
                    <div className='ml-3'>
                        <h1 className='text-[16px]'>{ne.author.name}</h1>
                        <p className='text-[14px] '>{ne.author.published_date.slice(0,10)}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                <IoBookmarkOutline size={24} />
                <CiShare2 size={24} />
                </div>
            </div>
            <div>
                <h1 className='text-xl text-primary font-bold'>{ne.title}</h1>
                <img src={ne.thumbnail_url} className='h-[262px] w-full object-contain '></img>
                <p>{
                    show?<p>{ne.details}<span onClick={()=>setShow(false)} className='text-warning font-semibold'>Read Less</span></p>:<p>{ne.details.slice(0,300)}<NavLink to={`/news-details/${ne.id}`} onClick={()=>setShow(true)} className='text-warning font-semibold'>...Read More</NavLink></p>
                }</p>
            </div>
            <div className='flex justify-between items-center border-t-2 border-base-300 p-3 mt-3'>
                <div className='flex justify-between items-center gap-2 text-accent font-medium '>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
<p>{ne.rating.number}</p>
                </div>
                <div className='text-accent font-medium  flex gap-2 justify-between items-center'>
                <FaEye size={24}/><p>{ne.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;