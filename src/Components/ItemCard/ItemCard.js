import React from 'react';
import './ItemCard.css';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
    const data = props.data;
  return (
    <>
    <Link to={`/catogrie/${data.id}`} className="Card-div">
      <div className="Card-imgdiv">
       <img src={data.Image} alt="" />
      </div>
       <div className="Card-pricing">
       <h3>{data.Name}</h3>
        <h4>&#8377;  {data.Price}</h4>
       </div>
    </Link>
    
      
    </>
  );
}

export default ItemCard;
