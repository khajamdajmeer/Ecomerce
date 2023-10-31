import React from 'react';
import './CatogorieNavbar.css';
import { Link } from 'react-router-dom';
const CatogorieNavbar = () => {
  return (
    <>
      <div className="CatagoriNav">
        <ul className="CatagoriNav-menu">
            <li><Link to='/category/all' className='Catagory-link'>all</Link></li>
            <li><Link to='/category/Jacket' className='Catagory-link'>Jackets</Link></li>
            <li><Link to='/category/Shirt' className='Catagory-link'>Shirts</Link></li>
            <li><Link to='/category/Formal' className='Catagory-link'>Formal</Link></li>
            <li><Link to='/category/Shoes' className='Catagory-link'>Shoes</Link></li>
            <li><Link to='/category/Accessories' className='Catagory-link'>Accessories</Link></li>
        </ul>
      </div>
    </>
  );
}

export default CatogorieNavbar;
