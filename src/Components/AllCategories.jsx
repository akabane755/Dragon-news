import React, { use } from 'react';
import { NavLink } from 'react-router';
const promise=fetch("/categories.json").then(res=>res.json());
const AllCategories = () => {
  const data=use(promise);
 //console.log(data)
    return (
        <div>
             <p className='text-xl font-semibold text-primary '>All Category</p>
             <div className='grid col-span-1 gap-3 mt-5 '>
                {
                    data.map(cat=><NavLink key={cat.id} to={`/category/${cat.id}`} className="btn btn-white bg-white border-0 text-accent text-xl font-medium">{cat.name}</NavLink>)
                }
             </div>
        </div>
    );
};

export default AllCategories;