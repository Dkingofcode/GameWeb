//import React from 'react';
import "./hero.modules.css";


const Hero = () => {
  return (
    <div className='hero'>
      
      <div className='heroInfo'>
        
        <span>3D game Dev</span>

        <h1>Work that we<br /> produce for our clients</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Alias minima minus perferendis dolorem, libero 
            voluptas exercitationem veniam. Corrupti, deleniti dolore.
        </p>

        <button className="heroInfo-btn">Get more details</button>
      </div>


      <div className='heroImg'>
         
         <div className='imageBox'>
         <img className='gamePad' src='Ps5unsplash.jpg' alt='gamepad'  />
         <img className='unity' src='unity.png' /> 
         <img className='cryengine' src='cry.png' /> 
         <img className='unrealengine' src='unreal.png' /> 
        
         </div>
      </div>

    </div>
  )
}

export default Hero;
