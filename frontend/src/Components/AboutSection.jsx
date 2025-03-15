import React from 'react'
import { about } from '../assets/assets'
import { assets } from '../assets/assets'

const AboutSection = () => {
    return (
        <div className='w-full h-[1200px] bg-[#f2f2f2] flex relative'>


            {/* ---------------- left side -------------  */}
            <div className=' ps-[40px] sm:ps-[88px] sm:w-[50%]'>
                <div className='w-max pt-[63px]'>
                    <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] sm:text-[36px]'>ABOUT TRICTA</h2>
                </div>

                <div className='pt-[48px]'>
                    <h1 className='text-[40px] sm:text-[64px]'>Designing <br /> Futuristic Solutions</h1>
                </div>

                <div className='flex gap-4 mt-[10px]'>
                    {
                        about.map((i) => {
                            return (
                                <img src={i} className='w-[60px] h-[60px] sm:w-[88px] sm:h-[88px] hover:scale-130 transition-all ease-in duration-300 cursor-pointer' />
                            )
                        })
                    }
                </div>

                <div className='max-w-[400px] sm:max-w-[600px] mt-[39px]'>
                    <p className='text-[#474646] sm:text-[20px]'>We, at Tricta Technologies Pvt. Ltd, are a collection of a passionate set of creative individuals, each with their own area of expertise in providing services like <b>Web designing, Web development, Web applications, Mobile applications, E-Commerce Solutions and Hosting Support.</b></p>
                </div>

                <div className='flex mt-6 justify-center sm:justify-end sm:mt-[40px] sm:me-30'>
                    <button className='p-1 px-4 sm:p-2 sm:px-4 sm:text-[24px] cursor-pointer text-[#ED7F13] border border-[#ED7F13] hover:bg-[#ED7F13] hover:text-white  transition-all duration-600 ease-in-out rounded-[10px]'>
                        Learn more
                    </button>
                </div>

            </div>

            {/* ---------------- right side -------------  */}
            <div className='w-[100%] sm:w-[50%] absolute bottom-5 right-10 sm:absolute sm:bottom-10 sm:right-20 flex justify-end'>
                <div className=' w-[400px] h-[550px] sm:w-[600px] sm:h-[650px] bg-[#ECECEC] border-[4px] border-white rounded-[20px] relative'>
                    <div className='max-w-[500px] p-4 pt-10'>
                        <p className='sm:text-[20px]'>We proudly serve clients from all major regions across the globe, delivering innovative and reliable solutions tailored to their needs.</p>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <img src={assets.aboutUsImg} className='sm:w-[100%] sm:h-[487px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
