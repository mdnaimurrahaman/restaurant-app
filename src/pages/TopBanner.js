import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import '../styles/TopBanner.css'

const TopBanner = () => {
    return (
        <div className='top__banner'>
            <div className='banner-slider'>
                <div className='wrapper'>
                    <div className='slide'>
                        <div className='box'>
                            <div className="content">
                                <div className='banner-title '>
                                    <span>DOUBLE</span> 
                                    <span>MUSHROOM</span>
                                    <span>BURGER</span>
                                </div>
                                <div className='price'>
                                    <li>Cheese</li>
                                    <li>Mushroom</li>
                                    <div></div>
                                    <span className='flex items-center'>
                                        <span className='flex flex-col relative'>
                                            <span><small>only</small></span>
                                            <span className='price__rs'>Rs. 199</span>
                                        </span>
                                        <span className='plus'><IoMdAddCircle/></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;