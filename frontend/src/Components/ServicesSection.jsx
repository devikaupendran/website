import React from 'react'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
    return (
        <div className='w-full sm:h-[910px]'>
            <div className='sm:w-full'>

                <div className='ps-[40px] sm:ps-[88px] w-max pt-[63px]'>
                    <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] sm:text-[36px]'>SERVICES</h2>
                </div>

                <div className='pt-[38px] ps-[40px] sm:ps-[88px]'>
                    <h1 className='text-[38px] sm:text-[64px] text-[#5B5B5B]'>What we can do for you</h1>
                </div>

                <ServiceCard />

                <div className='flex justify-center m-20'>
                    <button className='p-1 px-4 sm:p-2 sm:px-4 sm:text-[24px] cursor-pointer text-[#ED7F13] border border-[#ED7F13] hover:bg-[#ED7F13] hover:text-white  transition-all duration-600 ease-in-out rounded-[10px]'>
                        View more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
