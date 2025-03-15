import React, { useState, useEffect } from 'react';
import { slides } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousal = () => {
    
    const [current, setCurrent] = useState(0);

    // Function to move to the previous slide
    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    // Set up auto-slide
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, [current]); // Re-run when current slide changes


    return (
        <div className='w-[90%] sm:w-[68%] rounded-[20px]' >
            <div className='overflow-hidden relative  sm:h-[560px] rounded-[20px] top-20 left-6 sm:left-20' style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <div className={`flex transition ease-in-out duration-700`} style={{ transform: `translateX(-${current * 100}%)` }}>
                    {
                        slides.map((s, index) => (
                            <img key={index} src={s} className='rounded-[20px] object-contain' />
                        ))
                    }
                </div>

                {/*----------------- Left and Right buttons -------------------------*/}

                <div className="absolute inset-0 flex justify-between items-center p-4">
                    <button
                        onClick={previousSlide}
                        className="p-2 rounded-full shadow-xl border-gray-100 hover:bg-gray-400 transition-all ease-in duration-370 cursor-pointer w-10 ">
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black', fontSize:'22px'}} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full shadow-xl border-gray-100  hover:bg-gray-400 transition-all ease-in duration-370 cursor-pointer w-10">
                        <FontAwesomeIcon icon={faChevronRight} style={{ color: 'black', fontSize:'22px'}}  />
                    </button>
                </div>

                {/* ---------------------------- Slide indicators ---------------------------- */}
                <div className='absolute bottom-6 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {
                            slides.map((_, i) => (
                                <div key={i} className={`transition-all w-3 h-3 rounded-full ${current === i ? 'bg-[#ED7F13]' : 'bg-gray-300'}`}></div>
                            ))
                        }
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Carousal;
