import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Resources/Images/logo.png'
import CartItemsCard from '../CartItemsCard/CartItemsCard';
import {  useSelector } from 'react-redux';
const Navbar = () => {



  const count = useSelector((state)=>state.counter.value);

    const handlehambtn = ()=>{
        const menu = document.getElementById('mymenu')
       if(menu.style.display==='none'){
           menu.style.display='flex'
       }
       else{
           menu.style.display='none'
       }
   
    }

    const openCart = ()=>{
        const cart = document.getElementById('mycart');
        if(cart.style.display==='block'){
            cart.style.display='none'
        }
        else{
            cart.style.display='block'
        }
    }

    const [cartCoutn,setCartCount]=useState(JSON.parse(localStorage.getItem('cart')) || []);
    
   

   const [totalCartValue,setTotalCartValue]=useState(0);
   
   useEffect(()=>{
    const mycart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(mycart)
   
  // Calculate total cart value based on the current cart
  let totalcart = 0;
  for (const item of mycart) {
    const subtotal = item.quantity * parseInt(item.price);
    totalcart += subtotal;
  }
  // Update the total cart value
  setTotalCartValue(totalcart);
    // eslint-disable-next-line
  },[count])

  return (
    <>
      <nav>
    <div className="container">
      <div className="menu-icon1">
      <img src={logo} alt="" />
      </div>
    <ul className="menu" id='mymenu'>
        <li><Link className='menu-link' to='/'>Home</Link></li>
        <li><Link className='menu-link' to='/category/all' >Catogries</Link></li>
      </ul>
      <div className='Nav-right'>

      <div className="Nav-cart" onClick={openCart}>
      <span class="material-symbols-outlined">
shopping_cart
</span>
<div className="Nav-count">{count}</div>
      </div>
      <button className='hambutton' onClick={handlehambtn}><span class="material-symbols-outlined">menu</span></button>
        </div>
    </div>
  <div className="Cart-list" id='mycart'>
    <div className="cart-item">

    <div className="head">
    <h2>My Cart</h2>
<button onClick={openCart}>
<span class="material-symbols-outlined">
close
</span>
</button>
    </div>


    <div className="Cart-item-list">
      {cartCoutn.map((ele,index)=>{
        return(
          <CartItemsCard id={ele.id} quantity={ele.quantity}/>
        )
      })}
    </div>
    <div className="Cart-value">
      <div className="totalpricing">Total Price: {totalCartValue}</div>
      <button className="checkout plusbutton" >Checkout</button>
    </div>
    </div>
  </div>
  </nav>
    </>
  );
}

export default Navbar;
