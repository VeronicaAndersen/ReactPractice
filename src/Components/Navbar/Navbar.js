import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
    </div>
    </>
  )
}

export default Navbar