import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import About from './About';
import BlackBanner from './BlackBanner';
import BottomBanner from './BottomBanner';
import Delivery from './Delivery';
import FarmToFork from './FarmToFork';
import Ingredient from './Ingredient';
import Reviews from './Review/Reviews';
import TopBanner from './TopBanner';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <Helmet title="Home">
            <TopBanner/>
            <About/>
            <WhyChoose/>
            <BlackBanner/>
            <Delivery/>
            <Ingredient/>
            <Reviews/>
            <FarmToFork/>
            <BottomBanner/>
        </Helmet>
    );
};

export default Home;