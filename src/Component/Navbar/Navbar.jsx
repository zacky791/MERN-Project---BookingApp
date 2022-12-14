import React from 'react'
import Button from '../../UI/Button'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <span className='logo'>Kelabubooking</span>
        <div className='homeOfBtn'>
            <Button className='btnRegister'>Register</Button>
            <Button className='btnLogin'>Login</Button>
        </div>
        </div>
    </div>
  )
}

export default Navbar