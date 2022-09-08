import React from 'react';
import Data from './Data';
import Review from './Review';
import img from '../../assets/images/Reviews img.jpg'
import './Review.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Reviews = () => {
    const reviews = Data;
    console.log(reviews)
    return (
        <div className='reviews__container'>
            <div className='review__title'>
                <p>Clients Review</p>
                <span>Testimonials</span>
            </div>
            <div className='reviews__wrapper'>
                <div className='client__img'>
                    <img src={img} alt="" srcset="" />
                </div>
                <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]} className='reviews mySwiper'>
                    {
                        reviews.map(review => <SwiperSlide key={review.id}><h1>{review.name}</h1></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;