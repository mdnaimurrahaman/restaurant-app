import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import About from './About';
import BlackBanner from './BlackBanner';
import Delivery from './Delivery';
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
        </Helmet>
    );
};

export default Home;