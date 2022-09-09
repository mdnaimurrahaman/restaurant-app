import React from 'react';
import '../styles/FarmToFork.css'

const FarmToFork = () => {
    return (
        <div className='farm__container'>
            <div className='farm__title'>
                <span>Farm To Fork</span>
                <p>All the ingredients used in your favourite meals are sourced straight from the farm!</p>
            </div>
            <div className='farm__wrapper'>
                <div className='farm__content'>
                    <div className='content__details'>
                        <div className='lettuce__item'>
                            <span>FRESH</span>
                            <span>Lettuce</span>
                        </div>
                        <div className='coffee__item'>
                            <span>REFRESHING</span>
                            <span>Coffee</span>
                        </div>
                    </div>
                    <div className='content__details'>
                        <div className='crispy__item'>
                            <span>CRISPY</span>
                            <span>French Fries</span>
                        </div>
                        <div className='healthy__item'>
                            <span>HEALTHY</span>
                            <span>Eggs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmToFork;