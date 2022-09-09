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
                            <div className='farm__text'>
                                <span>FRESH</span>
                                <br/>
                                <p>Lettuce</p>
                            </div>
                        </div>
                        <div className='coffee__item'>
                            <div className='farm__text'>
                                <span>REFRESHING</span>
                                <br/>
                                <p>Coffee</p>
                            </div>
                        </div>
                    </div>
                    <div className='content__details'>
                        <div className='crispy__item'>
                            <div className='farm__text'>
                                <span>CRISPY</span>
                                <br/>
                                <p>French Fries</p>
                            </div>
                        </div>
                        <div className='healthy__item'>
                            <div className='farm__text'>
                                <span>HEALTHY</span>
                                <br/>
                                <p>Eggs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmToFork;