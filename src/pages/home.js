import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'
import AspenImage from '../images/Aspen.png';
import Plan from '../images/Plan your Luxurious Vacation.png';

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: "url('https://wallup.net/wp-content/uploads/2016/02/183105-mountain-nature.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <img className='aspen' src={AspenImage} alt='aspen' />
      </div>
      <div>
        <img className='plan' src={Plan} alt='plan your vacation' />
      </div>
      <Link className='btn' to="/explore-page">
  Explore
</Link>
    </div>
  );
};

export default Home;



