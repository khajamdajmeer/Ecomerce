import React, { useState } from 'react';
import './CartitemsCard.css';
import ItemData from '../../Components/ItemsData'
const CartItemsCard = (props) => {
    const itemid = props.id;
    const [quantity,setQuantity] = useState(props.quantity);
    const filterdata = ItemData.filter((ele)=>{return(ele.id===itemid)})
    const handleplus=()=>{
        if(quantity<20){
            setQuantity(quantity+1)
        }
    }
    const handleminus = ()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }

    const handleRemove=(id)=>{
            const Cart = JSON.parse(localStorage.getItem('cart')) || [];
        const removedCart = Cart.findIndex((item)=>item.id===id);
        if(removedCart!==-1){
            Cart.splice(removedCart,1);
        }
    }
  return (
    <>
      <div className="CartItem-card">
        <div className="Cart-img"><img src={filterdata[0].Image} alt="" /></div>
        <div className="CartInfo">
            <h3>{filterdata[0].Name}</h3>
            <div className="changeQuantity">
            <h5>Quantity : {quantity}</h5>
            <h2>{filterdata[0].Price *quantity}</h2>
</div>
            <div className="changeQuantity">
                <div className="quantitybtns">
                <button onClick={handleminus}>-</button>
                <h4>{quantity}</h4>
                <button className='plusbutton' onClick={handleplus}>+</button></div>
            <button className="delete" >
            <span class="material-symbols-outlined">delete</span>
            </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default CartItemsCard;
