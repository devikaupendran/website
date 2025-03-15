import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        // ------------------------------------- navbar -------------------------------------
        <div className='relative z-10 h-[100px] bg-transparent flex justify-between items-center px-6' >
            <div className='p-6'>
                <img src={assets.logo} className='w-[180px] h-[55px] cursor-pointer' />
            </div>
            <div className='w-[733.53px] mt-[30px]'>
                <ul className='flex justify-around font-semibold text-white'>
                    <NavLink to='/'><li>HOME</li> </NavLink>
                    <li>ABOUT US</li>
                    <li>SERVICES <FontAwesomeIcon icon={faCaretDown} className='ms-1' /></li>
                    <li>PRODUCTS <FontAwesomeIcon icon={faCaretDown} className='ms-1' /></li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
