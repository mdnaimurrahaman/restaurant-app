import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import About from './About';
import TopBanner from './TopBanner';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <Helmet title="Home">
            <TopBanner/>
            <About/>
            <WhyChoose/>
        </Helmet>
    );
};

export default Home;