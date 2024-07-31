import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../css/explorePage.css";
import AspenTXT from "../images/Greet.png";
import { IoSearch } from "react-icons/io5";
import { FormControl } from "react-bootstrap";
import exploreImage1 from '../images/Group 3420.png';
import exploreImage2 from '../images/Image group.png';
import exploreImage3 from '../images/Frame 1000000858.png';
import exploreImage4 from '../images/Frame 1000000863.png';
import { RiHome3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LuTicket } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

const ExplorePage = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col col1">
          <img className="txt-aspen" src={AspenTXT} alt="aspen" />
        </div>
        <div className="col col2">
          <div class="dropdown-wrapper">
            <FaMapMarkerAlt className="location-icon" />
            <select className="dropdown">
              <option value="miami" className="dropdown-txt">
                Aspen, USA
              </option>
              <option value="newyork" className="dropdown-txt">
                New York
              </option>
              <option value="losangeles" className="dropdown-txt">
                Los Angeles
              </option>
              <option value="chicago" className="dropdown-txt">
                Chicago
              </option>
              <option value="houston" className="dropdown-txt">
                Houston
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="searchbar">
        <FormControl
          type="text"
          placeholder="Find things to do"
          className="mr-sm-2 form-control-custom"
        />
        <IoSearch className="search-icon" />
      </div>

      <ul className="nav">
        <li className="nav-item1">Location</li>
        <li className="nav-item1">Hotels</li>
        <li className="nav-item1">Food</li>
        <li className="nav-item1">Adventure</li>
        <li className="nav-item1">Action</li>
      </ul>

      <ul class="nav">
        <li className="nav-item popular">Popular</li>
        <li className="nav-item see-all">See all</li>
     
      </ul>

      <ul className="nav2">
      <li className="nav-item img">
        <Link to="/productPage">
          <img className="img1" src={exploreImage1} alt="img" />
        </Link>
      </li>
      <li className="nav-item img">
        <Link to="/productPage">
          <img className="img2" src={exploreImage2} alt="img" />
        </Link>
      </li>
      <li className="nav-item img">
        <Link to="/productPage">
          <img className="img22" src={exploreImage2} alt="img" />
        </Link>
      </li>
    </ul>

      <h2 className="recommended"> Recommended</h2>
        
      <ul class="nav3">
        <li className="nav-item img">
        <img className='img3' src={exploreImage3} alt='img' />
        </li>
        <li className="nav-item img">
        <img className='img4' src={exploreImage4} alt='img' />
        </li>
       
        </ul>

        <div className="last-div">

        </div>


    
      
    </div>
    <div className="last-nav">
    <RiHome3Fill  className="icons"/>
    <LuTicket className="icons"/>
    <GoHeart className="icons"/>
    <FaRegUser className="icons"/>

  
  </div>
</>
  );
};

export default ExplorePage;
