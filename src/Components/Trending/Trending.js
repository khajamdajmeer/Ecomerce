import React from 'react';
import './Trending.css'
import ItemCard from '../ItemCard/ItemCard';
import { useRef } from 'react';
import myitems from '../ItemsData';

const Trending = () => {

    const data = myitems.filter((item)=>item.ListType==='Trending');

    const TrendingScrollref = useRef(null);
    const ScrollStep = 304

    const handleScroll = (value)=>{
        const ScrollElement = TrendingScrollref.current;
        if(value==='right'){
            if(ScrollElement.scrollLeft+ScrollStep>=ScrollElement.scrollWidth){
                ScrollElement.scrollLeft=ScrollElement.scrollWidth;
            }
            else{
                ScrollElement.scrollLeft+=ScrollStep;
            }


        }
        else{
            if(ScrollElement.scrollLeft-ScrollStep<=0){
                ScrollElement.scrollLeft=0;
            }
            else{
                ScrollElement.scrollLeft-=ScrollStep;
            }
        }
    }

  return (
    <>
    <div className="Trending-div">
        <button className='Trending-scrollbtn btnleft' onClick={()=>handleScroll('left')}>
        <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <h1>Trending Now</h1>
        <div ref={TrendingScrollref} className="Trending-flex">
            {data.map((ele,index)=>{
                return(

                    <ItemCard data={ele}/>
                )
            })}
        </div>
        <button className='Trending-scrollbtn btnright' onClick={()=>{handleScroll('right')}}>
            <span class="material-symbols-outlined">chevron_right</span></button>
    </div>
      
    </>
  );
}

export default Trending;
