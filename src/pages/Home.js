import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import About from './About';
import BlackBanner from './BlackBanner';
import Delivery from './Delivery';
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
        </Helmet>
    );
};

export default Home;