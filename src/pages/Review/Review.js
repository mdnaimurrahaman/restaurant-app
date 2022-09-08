import React from 'react';
import { SwiperSlide } from 'swiper/react';

const Review = ({review}) => {
    return (
        <SwiperSlide>
            <h1>{review.name}</h1>
        </SwiperSlide>
    );
};

export default Review;