
import React from 'react'
import Carousal from './Carousal'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        
        <div className='h-100 sm:h-200'>
            <div className='absolute top-0 right-0'>
                <img src={assets.headerCircle} alt="" width={750} className="circle-animation w-[350px] sm:w-[750px]" />
            </div>

            <div>
                <Carousal />
            </div>
        </div>

    )
}

export default Header


