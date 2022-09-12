import React from 'react';
import '../styles/BottomBanner.css'

const BottomBanner = () => {
    return (
        <section className='last__container'>
            <div className='last__content'>
                <div className='last__details'>
                    <h1>Our High Quality Ingredients</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minus suscipit optio cumque beatae? Est eos quia nam. Cupiditate, totam.</p>
                </div>
                <div className='last__button'>
                    <button>Discover the Menu</button>
                    <button>Daily Offers</button>
                </div>
            </div>
        </section>
    );
};

export default BottomBanner;