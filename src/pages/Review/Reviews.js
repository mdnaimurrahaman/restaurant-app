import React from 'react';
import Data from './Data';
import img from '../../assets/images/Reviews img.jpg'
import style from './Reviews.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";


const Reviews = () => {
    const reviews = Data;
    console.log(reviews)
    return (
        <div className={style.reviews__container}>
            <div className={style.review__title}>
                <p>Clients Review</p>
                <span>Testimonials</span>
            </div>
            <div className={style.reviews__wrapper}>
                <div className={style.client__img}>
                    <img src={img} alt="" srcset="" />
                </div>
                <Swiper
        pagination={{
            dynamicBullets: true,
          }}  modules={[Pagination, Autoplay]} autoplay={{delay:2200}}  className='reviews mySwiper'>
                    {
                        reviews.map(review => <SwiperSlide key={review.id}><p>{review.description}</p><h1>{review.name}</h1></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;