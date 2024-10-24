// import React from 'react'
// import { NavLink,Outlet } from 'react-router-dom'
// import './navlink.css'

// const Navlink = () => {
//   return (
//     <div>
      
//    <nav className='nav'>

//     <NavLink to='/'className='links'>Home</NavLink>
//     <NavLink to='/about' className='links'>About</NavLink>
//     <NavLink to='/services' className='links'>Services</NavLink>
//     <NavLink to='/contact' className='links'>Contact</NavLink>
//     </nav>
//      <Outlet/>
//     </div>
//   )
// }

// export default Navlink



import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './navlink.css';

const Navlink = () => {
  return (
    <div>
      <nav className='nav'>
        <img
          src='https://www.shutterstock.com/shutterstock/photos/2014907570/display_1500/stock-vector-sneakers-with-wings-svg-flying-shoes-track-clipart-cross-country-cut-file-2014907570.jpg'
          alt='Logo'
          className='logo'
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavLink to='/' className='links'>Home</NavLink>
          <NavLink to='/about' className='links'>About</NavLink>
          <NavLink to='/services' className='links'>Services</NavLink>
          <NavLink to='/contact' className='links'>Contact</NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navlink;

