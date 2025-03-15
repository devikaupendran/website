import React from 'react'
import { detailsOfServicesCard } from '../assets/assets'
import { assets } from '../assets/assets'

const ServiceCard = () => {
    return (
        <div className='flex flex-col justify-center items-center sm:flex sm:flex-row gap-20 mt-[64px]'>
            {
                detailsOfServicesCard.map((card, index) => {
                    return (

                        <div key={index} className='w-[350px] h-[370px] rounded-[20px] flex flex-col  items-center relative customCard cursor-pointer hover:scale-105 transition ease duration-300'>
                            <div>
                                <img src={card.imageGif} alt="card image" className='w-[130px] h-[130px] mt-[30px] rounded-full' />
                            </div>
                            <div className='text-center p-[23px]'>
                                <h1 className='text-[28px] text-[#ED7F13] my-[10px] font-medium'>{card.heading}</h1>
                                <p>{card.subHeading}</p>
                            </div>

                            <div className='absolute right-0 bottom-0 '><img src={assets.cardBottomDesign} className='rounded-br-[20px] overflow-hidden' alt=""/></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServiceCard
