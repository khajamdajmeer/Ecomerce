import React, { useEffect } from 'react';
import Trending from '../Components/Trending/Trending';
import './Home.css';
import homeimg from '../Resources/Images/ecommain.jpg';
import BestSeller from '../Components/BestSeller/BestSeller';
import bannerimg from '../Resources/Images/Catogries/fashionCard1.jpg'
const Home = () => {


  useEffect(()=>{
      localStorage.setItem('Cart',[])
  },[])
  return (
    <>
    <div className="Home-div">
      <div className="home-img">

        <img src={homeimg} alt="" />
      </div>
      <div className="home-container">
      <BestSeller/>

      </div>
      <div className="Banner-card">
        <div className="Banner-left">
        <div className="banner-container">
          <h2>Trending Fashion</h2>
          <h4>Ak Products are all Made to StandOut, so You can Explore New Trends</h4>
          <button className="shownow">SHOP NOW</button>
        </div>
        </div>
        <div className="Banner-right">
          <img src={bannerimg} alt="" />
        </div>
      </div>

<Trending/>
     
      


    </div>
      
    </>
  );
}

export default Home;
