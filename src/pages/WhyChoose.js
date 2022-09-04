import React from 'react';
import '../styles/WhyChoose.css'
import burger1 from '../assets/images/Choose Burger1.png'
import burger2 from '../assets/images/Choose Burger2.png'
import McLogo from '../assets/images/MC-LOGO-TEXT.png'
import girl from '../assets/images/Girl-Image.png'

const WhyChoose = () => {
    return (
        <div className='choose__container'>
            <div className='choose__wrapper'>
                <div className='choose__title'>
                    <img src={McLogo} alt="" srcset="" />
                    <h1>Why Choose us?</h1>
                </div>
                <div className='choose__content'>
                    <div className="choose__img">
                        <img src={burger1} alt="" srcset="" />
                    </div>
                    <div className='choose__info'>
                        <h1>Commitment to quality</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil accusamus suscipit magnam natus! Autem sed maxime, natus sit eveniet rem.</p>
                    </div>
                </div>
                <div className='choose__content choose__content2'>
                    <div className='choose__info'>
                        <h1>What's in you food</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil accusamus suscipit magnam natus! Autem sed maxime, natus sit eveniet rem.</p>
                    </div>
                    <div className="choose__img">
                        <img src={girl} alt="" srcset="" />
                    </div>
                </div>
                <div className='choose__content'>
                    <div className="choose__img">
                        <img src={burger2} alt="" srcset="" />
                    </div>
                    <div className='choose__info'>
                        <h1>Nutrition Calculator</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil accusamus suscipit magnam natus! Autem sed maxime, natus sit eveniet rem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;