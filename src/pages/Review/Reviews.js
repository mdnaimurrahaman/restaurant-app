import React from "react";
import Data from "./Data";
import img from "../../assets/images/Reviews img.jpg";
import style from "./Reviews.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Reviews = () => {
  const reviews = Data;
  console.log(reviews);
  return (
    <div className={style.reviews__container}>
      <div className={style.review__title}>
        <p>Clients Review</p>
        <span>Testimonials</span>
      </div>
      <div className={style.reviews__wrapper}>
        {/* <div className={style.client__img}>
          <img src={img} alt="" srcset="" />
        </div> */}
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]} autoplay={{delay:2200}}
          className="reviews mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className={style.swiper__client__msg}>
                <p>{review.description}</p>
              </div>
              <div className={style.swiper__client__data}>
                <figure>
                  <img src={review.cover} alt="client review" srcset="" />
                </figure>
                <div className={style.client__data__details}>
                  <h3>{review.name}</h3>
                  <p>{review.time}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
