import React from 'react';
import icon2 from '../assets/images/Delivery Icon/Delivery-icon2.png'
import icon3 from '../assets/images/Delivery Icon/Delivery-icon3.png'
import icon4 from '../assets/images/Delivery Icon/Delivery-icon4.png'
import icon1 from '../assets/images/Delivery Icon/Delivery-icon1.png'
import '../styles/Delivery.css'

const Delivery = () => {
    return (
        <div className='delivery__container'>
            <h2>How do you want to enjoy uour McDonald’s meal?</h2>
            <div className='delivery__wrapper'>
                <div className="delivery__content">
                    <div>
                        <img src={icon1} alt="" srcset="" />
                    </div>
                    <span className='delivery__info'>
                        <span>Delivery</span>
                        <p>Enjoy safe and contactless delivery to your doorstep with exciting offers?</p>
                    </span>
                </div>
                <div className="delivery__content">
                    <div>
                        <img src={icon2} alt="" srcset="" />
                    </div>
                    <span className='delivery__info'>
                        <span>On The Go</span>
                        <p>Delivery to your car at a pick-up point on your way</p>
                    </span>
                </div>
                <div className="delivery__content">
                    <div>
                        <img src={icon3} alt="" srcset="" />
                    </div>
                    <span className='delivery__info'>
                        <span>Takeout</span>
                        <p>Order and pick-up from one of our restaurants</p>
                    </span>
                </div>
                <div className="delivery__content">
                    <div>
                        <img src={icon4} alt="" srcset="" />
                    </div>
                    <span className='delivery__info'>
                        <span>Dine In</span>
                        <p>Order inline and dine in the restaurant</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Delivery;