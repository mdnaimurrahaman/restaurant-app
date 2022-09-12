import React from 'react';
import '../styles/BottomBanner.css'

const BottomBanner = () => {
    return (
        <section className='last__container'>
            <div className='last__content'>
                <div className='last__details'>
                    <h1>Our High Quality Ingredients</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim eum ducimus, nostrum aperiam tempore laboriosam eaque iure quidem necessitatibus? Ex temporibus nulla laudantium consequuntur rem recusandae ipsum, possimus fugiat neque corporis consectetur, at nisi.</p>
                </div>
                <div className='last__button'>
                    <button className='banner-button'>Discover the Menu</button>
                    <button className='banner-button'>Daily Offers</button>
                </div>
            </div>
        </section>
    );
};

export default BottomBanner;