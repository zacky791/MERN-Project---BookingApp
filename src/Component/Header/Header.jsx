import { faBed, faCar, faCocktail, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css'
//using awesome font library

const Header = ()=> {
  return (
    <div className='header'>

        <div className='headerContainer'>
        <div className='headerListItem'>
         <div>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
         </div>
      </div>

      <div className='headerListItem'>
         <div>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
         </div>
      </div>

      <div className='headerListItem'>
         <div>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
         </div>
      </div>

      <div className='headerListItem'>
         <div>
            <FontAwesomeIcon icon={faCocktail} />
            <span>Attraction</span>
         </div>
      </div>

      <div className='headerListItem'>
         <div>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Header
