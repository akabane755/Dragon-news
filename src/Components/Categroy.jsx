
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const Categroy = () => {
  const [news,setNews]=useState([]);
    const {id}=useParams();
    const data1=useLoaderData();
  useEffect(()=>{
    if(id==0)
    {
      setNews(data1);
      return;
    }
    else if(id==1)
    {
      const data=data1.filter(da=>da.others.is_today_pick==id);
      setNews(data)
      return;
    }

    const data=data1.filter(da=>da.category_id==id);
    setNews(data)

  },[id,data1])
    return (
        <div>
         
          <p className='text-xl text-primary font-semibold mx-5'><span className='text-secondary'>{news.length} </span>news here </p>
          <div className='text-[16px]'>
          {
            news.map(ne=><NewsCard key={ne.id} ne={ne}></NewsCard>)
          }
          </div>
        </div>
    );
};

export default Categroy;