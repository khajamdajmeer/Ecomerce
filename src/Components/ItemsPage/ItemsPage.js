import React, { useEffect, useState } from 'react';
import myitems from '../ItemsData';
import './ItemsPage.css'
import { useParams } from 'react-router';
import {Add} from '../../Redux/CartCounter';
import Trending from '../Trending/Trending';
import { useDispatch } from 'react-redux';
const ItemsPage = () => {

  const dispatch = useDispatch();
  const { id }=useParams();
  const filteritem = myitems.filter((ele)=>ele.id===parseInt(id));
  const myitem= filteritem[0]
  const [displayimg,setDisplayimg] = useState(myitem.Image);
  useEffect(()=>{
setDisplayimg(myitem.Image);
setQuantity(1)
  },[myitem])
  const handleDisplayImgChange = (image)=>{
    setDisplayimg(image)
  }
  const [quantity,setQuantity] = useState(1)

  const handleQuantityCount = (type)=>{
    if(type==='+'){
      setQuantity(quantity+1);
    }else{
      setQuantity(quantity-1);
    }
  }


  const AddtoCart = (id,price)=>{
    const Cart=JSON.parse(localStorage.getItem('cart')) || [];
    if(Cart){
      const existingitem = Cart.find((item)=>item.id===id)
      if(!existingitem){
        localStorage.setItem('cart',JSON.stringify([...Cart,{id:id,price:price,quantity:quantity}]));
        dispatch(Add())
      }
    }else{
      localStorage.setItem('cart',JSON.stringify([...Cart,{id:id,price:price,quantity:quantity}]));
    }

  }



  return (
    <>
    <div className="itempage-container">
      <div className="item-container">
        <h2>{myitem.Name}</h2>
        <div className="item-flex-container">

          <div className="item-flex-img">
            <div className="multi-img">
              <button className='mulit-imgbtn'  onClick={()=>handleDisplayImgChange(myitem.Image)}><img src={myitem.Image} alt="" /></button>
              <button className='mulit-imgbtn' onClick={()=>handleDisplayImgChange(myitem.OtherImages[0])}><img src={myitem.OtherImages[0]} alt="" /></button>
              <button className='mulit-imgbtn' onClick={()=>handleDisplayImgChange(myitem.OtherImages[1])}><img src={myitem.OtherImages[1]} alt="" /></button>
            </div>
            <div className="mainimg">
              <img src={displayimg} alt="" />
            </div>
          </div>
          <div className="item-flex-info">
            
            <p>{myitem.Discription}</p>
          <div className="item-pricing">
            <h2>Quantity</h2>
            <div className="CartCount">
              <button disabled={quantity<=0} onClick={()=>handleQuantityCount('-')}>-</button>
              <div className="count">{quantity}</div>
              <button onClick={()=>handleQuantityCount('+')} disabled={quantity>=19}>+</button>
            </div>
            <h2>&#8377; {myitem.Price}</h2>
          </div>
          <div className="ActionBtns">
            <button className='addcartbtn' onClick={()=>{AddtoCart(myitem.id,myitem.Price)}}>Add to Cart</button>
            <button className='buynowbtn'>Buy Now</button>
          </div>
          </div>
        </div>
<Trending/>

      </div>
    </div>
    </>
  );
}

export default ItemsPage;
