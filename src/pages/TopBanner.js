import React from 'react';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// Import Swiper styles
import 'swiper/css/autoplay'
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { IoMdAddCircle } from 'react-icons/io';
import '../styles/TopBanner.css'

const TopBanner = () => {
    return (
        <div className='top__banner'>
            <div className='banner-slider'>
                <Swiper pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]} autoplay={{delay:2200}} className='wrapper mySwiper'>
                    <SwiperSlide className='slide'>
                        <div className='box'>
                            <div className="content">
                                <div className='banner-title '>
                                    <span>DOUBLE</span> 
                                    <span>MUSHROOM</span>
                                    <span>BURGER</span>
                                </div>
                                <div className='price'>
                                    <li>Cheese</li>
                                    <li>Mushroom</li>
                                    <div></div>
                                    <span className='flex items-center'>
                                        <span className='flex flex-col relative'>
                                            <span><small>only</small></span>
                                            <span className='price__rs'>Rs. 199</span>
                                        </span>
                                        <span className='plus'><IoMdAddCircle/></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <div className='box__2'>
                            <div className="content">
                                <div className='second-title'>
                                    <span className='text-center'>ORDER McDelivery NOW</span> 
                                    <p className='text-center mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Inventore aliquid asperiores ducimus, omnis corrupti ad.</p>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='banner-button custom-btn flex flex-col text-center py-2 cursor-pointer mt-10'>
                                        <p>McDelivery</p>
                                        <span className='flex items-center justify-center'>
                                            <span>Order Now</span>
                                            <span className='ml-2'><BsFillArrowRightCircleFill/></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <div className='box__3'>
                            <div className="content mb-11">
                                <div className='banner-title'>
                                    <span className='mb-3'>GOURMENT.</span> 
                                    <span className='third-title '>THE WAY BURGER SHOULD BE!</span>
                                </div>
                                <div className='price'>
                                    <li>Cheese</li>
                                    <li>Mushroom</li>
                                    <div></div>
                                    <span className='flex items-center'>
                                        <span className='flex flex-col relative'>
                                            <span><small>only</small></span>
                                            <span className='price__rs'>Rs. 299</span>
                                        </span>
                                        <span className='plus'><IoMdAddCircle/></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TopBanner;