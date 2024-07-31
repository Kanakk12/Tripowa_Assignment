import React from "react";
import productImage from '../images/Ptoduct image.png';
import '../css/product.css';
import productInfo from '../images/Product info.png';
import fac1 from '../images/Frame 1000000865.png';
import fac2 from '../images/Frame 1000000866.png';
import fac3 from '../images/Frame 1000000867.png';
import fac4 from '../images/Frame 1000000868.png';
import price from '../images/Group 3414.png'



const ProductPage= () => {
  return (
    <>
    <div className="container">
  
    <div>
        <img className='pro_img' src={productImage} alt='aspen' />
      </div>
       
    <div>
        <img className='pro_img' src={productInfo} alt='aspen' />
      </div>

     <div className="faci">
      <h1 >Facilities</h1>
      </div>

      <ul class="navfac">
        <li className="nav-item img">
        <img className='fac' src={fac1} alt='img' />
        </li>
        <li className="nav-item img">
        <img className='fac' src={fac2} alt='img' />
        </li>
        <li className="nav-item img">
        <img className='fac' src={fac3} alt='img' />
        </li>
        <li className="nav-item img">
        <img className='fac' src={fac4} alt='img' />
        </li>
       
        </ul>

        <div className="bookdiv">
        <img className='price' src={price} alt='img' />

        <button className="btnbook">Book Now →</button>
        </div>



      


    
      
 
  </div>
</>
  );
};

export default ProductPage;