import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
    return (
        <div className='flex item-center justify-center h-80 sm:h-200'
            style={{backgroundImage:`url(${assets.banner})`, backgroundPosition:'center', backgroundAttachment:'fixed', backgroundSize:'cover'}}>
        </div>
    )
}

export default Banner
