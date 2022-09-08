import React from 'react';
import Data from './Data';
import Review from './Review';


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
                    <img src="" alt="" srcset="" />
                </div>
                <div className='reviews'>
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;