import React, { useEffect, useState } from 'react';
import './Catogries.css';
import ItemData from '../../Components/ItemsData'
import CatogorieNavbar from '../../Components/CatagorieNavbar/CatogorieNavbar';
import { useNavigate, useParams } from 'react-router';
import ItemCard from '../../Components/ItemCard/ItemCard';

const Catogries = () => {

    const {type} = useParams();
    const [mapdata,setMapdata] = useState(ItemData) 
    const mapitem = ()=>{
        if(type==='all'){
            setMapdata(ItemData)
        }
        else{
            setMapdata(
           ItemData.filter((ele)=>{
               return (ele.Catogrie===type)
            }))
        }
    }
    useEffect(()=>{
        mapitem();
        // eslint-disable-next-line 
    },[type])

    const history= useNavigate();
    const handlehomebtn = ()=>{
        history('/');
    }

    const randomizearray = (data)=>{
        for(let i = data.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1));
            [data[i],data[j]]= [data[j],data[i]];
        }
    }
    randomizearray(ItemData);
  return (
    <>
    <div className="Catogry-Heading">
        <button className='backhomebtn' onClick={handlehomebtn}>
        <span class="material-symbols-outlined">chevron_left</span>Home</button>
        <h2>All</h2>
    </div>
      <CatogorieNavbar/>
      <div className="Products">
        <div className="Products-container">
            {mapdata.map((ele,index)=>{
                return(<ItemCard data={ele}/>)
            })}
        </div>
      </div>
    </>
  );
}

export default Catogries;
