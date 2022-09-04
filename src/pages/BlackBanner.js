import React from 'react';
import '../styles/BlackBanner.css'

const BlackBanner = () => {
    return (
        <div className='black__banner'>
            <div className='banner__content'>
                <div className='first__info'>
                    <h2>Want to try something different?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quidem delectus enim atque vero suscipit obcaecati dicta deserunt? Consequuntur neque culpa perspiciatis dolore, doloremque impedit porro sequi excepturi iste in?</p>
                </div>
                <div className='second__info'>
                    <div className='info__menu'>
                        <span>Lorem Ipsum</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='info__menu'>
                    <span>Lorem Ipsum</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='info__menu'>
                    <span>Lorem Ipsum</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlackBanner;