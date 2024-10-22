import React from 'react';
import Logo from '../../ui/Logo';
import { Link, useNavigate } from "react-router-dom"; 
import "./header.modules.css";



const Header = () => {
   const navigate = useNavigate();


  return (
    <div className='header'>
      <Logo  />

      <ul className='navigation'>
       <li onClick={() => navigate("/")}>Home</li>
       <li onClick={() => navigate("/about-us")}>About us</li>
       <li onClick={() => navigate("/portfolio")}>Portfolio</li>
       <li onClick={() => navigate("/news")}>News</li>
       <li onClick={() => navigate("/contact")}>Contact us</li>
      </ul>


    </div>
  )
}

export default Header;
